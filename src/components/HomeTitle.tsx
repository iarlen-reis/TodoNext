export const HomeTitle = () => {
  return (
    <div className="m-auto mt-3 flex max-w-[400px] flex-col sm:max-w-[500px] sm:text-center">
      <span className="animate-pulse text-start font-body text-xl font-semibold uppercase italic text-red-500 sm:text-2xl">
        TodoNext!
      </span>
      <div className="flex flex-col gap-2">
        <p className="font-title text-2xl font-bold uppercase text-zinc-800 sm:text-3xl">
          Uma nova maneira de gerenciar tarefas
        </p>
      </div>
    </div>
  )
}
