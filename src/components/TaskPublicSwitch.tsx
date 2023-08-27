import React from 'react'
import * as Switch from '@radix-ui/react-switch'

interface TaskPublicSwitchProps {
  isPublic: boolean
  handlePublic: () => void
}
const TaskPublicSwitch = ({
  isPublic,
  handlePublic,
}: TaskPublicSwitchProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-zinc-700">tornar a tarefa pública?</span>
      <Switch.Root
        checked={isPublic}
        onClick={handlePublic}
        className="bg-blackA9 relative h-[25px] w-[42px] cursor-pointer rounded-full border border-white bg-blue-400 outline-none data-[state=checked]:bg-emerald-400"
      >
        <Switch.Thumb className="block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[20px]" />
      </Switch.Root>
    </div>
  )
}

export default TaskPublicSwitch
