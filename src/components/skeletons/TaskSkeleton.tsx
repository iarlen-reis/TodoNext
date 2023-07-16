'use client'

export const TaskSkeleton = () => {
  return (
    <>
      <p className="mt-3 flex items-center justify-start gap-1 font-body text-sm text-zinc-700">
        <span className="h-4 w-20 animate-pulse rounded-md bg-zinc-400"></span>
        <span className="h-4 w-16 animate-pulse rounded-md bg-zinc-400"></span>
      </p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex flex-col gap-1 sm:gap-2">
          <h1 className="h-8 w-36 animate-pulse rounded-md bg-zinc-400"></h1>
          <p className="mt-1 h-4 w-48 animate-pulse rounded-md bg-zinc-400"></p>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-10 w-10 animate-pulse rounded-full bg-zinc-400"></span>
          <span className="h-10 w-10 animate-pulse rounded-full bg-zinc-400"></span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <span className="h-6 w-32 animate-pulse rounded-md bg-zinc-400"></span>
        <p className="h-[300px] animate-pulse rounded-md bg-zinc-400"></p>
      </div>
    </>
  )
}
