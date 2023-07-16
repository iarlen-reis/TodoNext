'use client'
import { useTasks } from '@/hooks/useTasks'
import { ProfileStatsSkeleton } from './skeletons/ProfileStatsSkeleton'

const ProfileStats = () => {
  const { tasks } = useTasks()

  const tasksFinished = tasks?.filter((task) => task.status !== 'pendente')
  const tasksPendding = tasks?.filter((task) => task.status === 'pendente')
  return (
    <div className="mx-auto flex w-[170px] flex-col gap-1 text-center sm:w-[200px]">
      <h2 className=" font-title text-base font-bold sm:text-lg">Tarefas</h2>
      {tasks ? (
        <>
          <div className="flex w-full justify-between ">
            <p className="font-body text-xs font-medium sm:text-sm">
              Pendentes: <span>{tasksPendding?.length}</span>
            </p>
            <p className="font-body text-xs font-medium  sm:text-sm">
              Conclúidas: <span>{tasksFinished?.length}</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <ProfileStatsSkeleton />
        </>
      )}
    </div>
  )
}

export default ProfileStats
