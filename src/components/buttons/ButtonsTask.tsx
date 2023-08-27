'use client'
import { Check, Trash2 } from 'lucide-react'
import { useTasks } from '@/hooks/useTasks'
import { IButtonsTaskProps } from '@/Types/components/ButtonsTaskTypes'

export const ButtonsTask = ({ id, status }: IButtonsTaskProps) => {
  const { finishTask, deleteTask } = useTasks()

  const handleFinishTask = async () => {
    finishTask(id)
  }

  const handleDeleteTask = async () => {
    deleteTask(id)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full justify-end gap-3">
        {status === 'pendente' && (
          <button
            onClick={handleFinishTask}
            className="group flex h-10 w-10 items-center justify-center rounded-full p-1 hover:bg-green-300"
          >
            <Check
              className="text-green-500 group-hover:text-green-800"
              size={22}
            />
          </button>
        )}
        <button
          onClick={handleDeleteTask}
          className="group flex h-10 w-10 items-center justify-center rounded-full p-1 hover:bg-red-300"
        >
          <Trash2 size={22} className="text-red-600 group-hover:text-red-800" />
        </button>
      </div>
    </div>
  )
}
