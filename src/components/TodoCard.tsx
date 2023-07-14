import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { formateDateToShow } from '@/utils/formateDate'
import { ITodoCardProps } from '@/Types/components/TodoCardTypes'
import DeleteButton from './buttons/DeleteButton'

export const TodoCard = ({
  id,
  title,
  dateConclusion,
  status,
  color,
}: ITodoCardProps) => {
  return (
    <div className="m-auto w-full max-w-[380px] rounded-md border border-zinc-300 bg-white p-1 shadow shadow-black/10 transition-all hover:scale-[1.08]">
      <div className="rounded-md p-3" style={{ backgroundColor: color }}>
        <div className="flex flex-col gap-3">
          <div className="flex w-full items-center justify-between">
            <span className="flex self-start rounded-full bg-white px-3 py-1 font-title text-2xl capitalize text-zinc-800">
              {title}
            </span>
            <DeleteButton
              id={id}
              className="rounded-full bg-zinc-50 p-2 hover:bg-zinc-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="w-fit rounded-full bg-white px-3 py-2 font-body text-xs font-medium italic text-zinc-900">
              {formateDateToShow(dateConclusion)}
            </span>
            <span
              className="w-fit rounded-full bg-white px-2 py-1 font-body text-xs font-medium capitalize italic text-zinc-900"
              style={{ color: status !== 'pendente' ? 'green' : '' }}
            >
              {status}
            </span>
          </div>
          <Link
            href={`task/${id}`}
            className="group flex items-center justify-center gap-1 self-end rounded-md border border-zinc-300 bg-blue-500 p-2 transition-colors hover:bg-blue-600"
          >
            <ArrowUpRight size={18} className="text-zinc-50" />
            <span className="text-sm text-zinc-50">Detalhes</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
