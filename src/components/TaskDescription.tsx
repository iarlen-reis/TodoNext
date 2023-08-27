import React from 'react'

interface ITaskDescriptionProps {
  description: string
}
const TaskDescription = ({ description }: ITaskDescriptionProps) => {
  return (
    <div className="mt-3 flex flex-col gap-1">
      <span className="font-body text-sm text-zinc-800 sm:text-lg">
        Descrição:
      </span>
      <p className="h-[300px] rounded-md p-2 font-body text-sm text-zinc-800">
        {description}
      </p>
    </div>
  )
}

export default TaskDescription
