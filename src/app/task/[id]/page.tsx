'use client'

import { useQuery } from 'react-query'
import { api } from '@/services/api'
import { ButtonsTask } from '@/components/buttons/ButtonsTask'
import { TaskSkeleton } from '@/components/skeletons/TaskSkeleton'
import { useTasks } from '@/hooks/useTasks'
import { AxiosError } from 'axios'
import TaskError from '@/components/TaskError'
import PageNavigation from '@/components/PageNavigation'
import TaskInformation from '@/components/TaskInformation'
import TaskPublicSwitch from '@/components/TaskPublicSwitch'
import TaskDescription from '@/components/TaskDescription'
import { useSession } from 'next-auth/react'

interface IParamProps {
  params: {
    id: string
  }
}

interface ITasksProps {
  id: string
  title: string
  status: string
  dateConclusion: string
  description: string
  createdAt: Date
  userId: string
  isPublic: boolean
  user: {
    name: string
  }
}

const Task = ({ params: { id } }: IParamProps) => {
  const { handlePublicTask } = useTasks()
  const { data: session } = useSession()

  const {
    data: task,
    isLoading: taskLoading,
    isError: taskError,
    error,
  } = useQuery(
    [id],
    async () => {
      const response = await api.get<ITasksProps>(`/tasks/${id}`)

      return response.data
    },
    {
      staleTime: 60 * 100 * 10,
      onError: (error: AxiosError) => {
        return error
      },
    },
  )

  const handlePublic = () => {
    handlePublicTask({ isPublic: !task?.isPublic, id })
  }

  return (
    <div className="m-auto w-full max-w-[500px]">
      {task && (
        <>
          <PageNavigation title={task.title} />
          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-col gap-1 sm:gap-2">
              <TaskInformation
                title={task.title}
                dateConclusion={task.dateConclusion}
                status={task.status}
              />
              {session?.user?.id !== task.userId && (
                <p className="font-body text-sm text-zinc-700">
                  Tarefa criada por: {task.user.name}
                </p>
              )}
              {session?.user?.id === task.userId && (
                <TaskPublicSwitch
                  isPublic={task.isPublic}
                  handlePublic={handlePublic}
                />
              )}
            </div>
            {session?.user?.id === task.userId && (
              <div className="flex self-start">
                <ButtonsTask id={task.id} status={task.status} />
              </div>
            )}
          </div>
          <TaskDescription description={task.description} />
        </>
      )}
      {taskLoading && <TaskSkeleton />}
      {taskError && <TaskError error={error.message} />}
    </div>
  )
}

export default Task
