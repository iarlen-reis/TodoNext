import { formateDateToShow } from '@/utils/formateDate'
import React from 'react'

interface TaskInformationProps {
  title: string
  dateConclusion: string
  status: string
}
const TaskInformation = ({
  title,
  dateConclusion,
  status,
}: TaskInformationProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-title text-2xl capitalize text-zinc-800 sm:text-3xl">
        {title}
      </h1>
      <ul className="flex items-center gap-2 font-body text-xs text-zinc-700 sm:text-sm">
        <li>{formateDateToShow(dateConclusion)}</li>
        <li>-</li>
        <li>
          <span className="capitalize">{status}</span>
        </li>
      </ul>
    </div>
  )
}

export default TaskInformation
