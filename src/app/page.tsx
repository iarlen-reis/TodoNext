import { HomeImage } from '@/components/HomeImage'
import { HomeTitle } from '@/components/HomeTitle'
import { MenuTools } from '@/components/MenuTools'
import { ShowTasks } from '@/components/ShowTasks'
import { useGetUser } from '@/hooks/useGetUser'

export default async function Home() {
  const { session } = await useGetUser()
  return (
    <main className="flex flex-col pb-10">
      {session ? (
        <div className="mt-3 flex w-full flex-col justify-center gap-6">
          <MenuTools />
          <ShowTasks />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <HomeTitle />
          <HomeImage />
        </div>
      )}
    </main>
  )
}
