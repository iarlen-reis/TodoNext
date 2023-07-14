'use client'
import { TodoCard } from './TodoCard'
import { useTasks } from '@/hooks/useTasks'
import { useFilterContext } from '@/contexts/filterContext'
import TasksSekeleton from './skeletons/TasksSekeleton'

import NoTasksImage from '/public/no-task-image.png'
import Image from 'next/image'

export const ShowTasks = () => {
  const { tasks, tasksLoading } = useTasks()
  const { filter } = useFilterContext()

  const filtered = tasks?.filter((task) => task.status.includes(filter))

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filtered &&
          filtered.map((task) => (
            <TodoCard
              id={task.id}
              title={task.title}
              dateConclusion={task.dateConclusion}
              status={task.status}
              key={task.id}
              color={task.color}
            />
          ))}
      </div>
      {!tasksLoading && !filtered?.length && (
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <Image
            src={NoTasksImage}
            alt="Nenhuma tarefa encontrada."
            className="w-32 sm:w-[240px]"
          />
          <p className="w-[250px] text-center font-title text-lg sm:w-[300px] sm:text-2xl">
            Nenhum tarefa {filter} Encontrada.
          </p>
        </div>
      )}
      {tasksLoading && <TasksSekeleton />}
    </>
  )
}
