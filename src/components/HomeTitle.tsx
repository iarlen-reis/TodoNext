export const HomeTitle = () => {
  return (
    <div className="m-auto mt-3 flex max-w-[400px] flex-col text-center sm:max-w-[500px]">
      <span className="animate-pulse font-body text-xl font-semibold uppercase italic text-red-500 sm:text-2xl">
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
