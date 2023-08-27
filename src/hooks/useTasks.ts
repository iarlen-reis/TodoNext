'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { api } from '@/services/api'

import {
  IFormProps,
  IUseTasksProps,
  ITasksProps,
} from '@/Types/hooks/UseTasksTypes'

export const useTasks = (): IUseTasksProps => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const pathname = usePathname()

  const { data: tasks, isLoading: tasksLoading } = useQuery(
    ['tasks'],
    async () => {
      const response = await api.get<ITasksProps[]>('/tasks')

      return response.data
    },
    {
      staleTime: 60 * 100 * 10, // 1 minute
    },
  )

  const { mutate: createTask, isLoading: loadingCreate } = useMutation(
    async (data: IFormProps) => {
      await fetch('/api/tasks', {
        body: JSON.stringify(data),
        method: 'POST',
      })
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['tasks'])

        toast.success('Tarefa criada com sucesso!')
      },
    },
  )

  const { mutate: finishTask } = useMutation(
    async (id: string) => {
      const response = await api.put(`/tasks/${id}`)

      return response.data
    },
    {
      onSuccess: (data: ITasksProps) => {
        const oldTask = queryClient.getQueryData<ITasksProps>([data.id])

        queryClient.setQueryData([data.id], {
          ...oldTask,
          status: 'concluída',
        })

        queryClient.refetchQueries(['tasks'])
        toast.success('Tarefa conclúida com sucesso!')
      },
    },
  )

  const { mutate: deleteTask } = useMutation(
    async (id: string) => {
      const response = await api.delete(`/tasks/${id}`)

      return response.data
    },
    {
      onSuccess: (data: ITasksProps) => {
        const oldsTasks = queryClient.getQueryData<ITasksProps[]>(['tasks'])

        if (oldsTasks) {
          const tasksUpdated = oldsTasks.filter((task) => task.id !== data.id)

          queryClient.setQueryData(['tasks'], tasksUpdated)

          if (pathname.includes('/task')) {
            router.push('/')
          }

          toast.success('Tarefa deletada com sucesso!')
        }
      },
    },
  )

  const { mutate: handlePublicTask } = useMutation(
    async (data: Pick<ITasksProps, 'isPublic' | 'id'>) => {
      const response = await api.patch(`/tasks/${data.id}`, {
        isPublic: !data.isPublic,
      })

      return response.data
    },
    {
      onSuccess: (data: ITasksProps) => {
        const newData = { ...data, isPublic: !data.isPublic }

        queryClient.setQueryData([data.id], newData)
      },
    },
  )

  return {
    tasks,
    createTask,
    finishTask,
    deleteTask,
    tasksLoading,
    loadingCreate,
    handlePublicTask,
  }
}
