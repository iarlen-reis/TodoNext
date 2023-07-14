'use client'
import { TodoCard } from './TodoCard'
import { useTasks } from '@/hooks/useTasks'
import { useFilterContext } from '@/contexts/filterContext'
import TasksSekeleton from './skeletons/TasksSekeleton'

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
      {tasksLoading && <TasksSekeleton />}
    </>
  )
}
