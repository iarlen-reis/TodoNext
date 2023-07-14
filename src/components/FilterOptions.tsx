'use client'
import { Delete } from 'lucide-react'
import { useFilterContext } from '@/contexts/filterContext'

export const FilterOptions = () => {
  const { handleOptionsFilter, handleFilter } = useFilterContext()

  const handlePendingTasks = () => {
    handleFilter('pendente')
    handleOptionsFilter()
  }

  const handleFinishedTasks = () => {
    handleFilter('concluída')
    handleOptionsFilter()
  }

  const handleRemoveFilter = () => {
    handleFilter('')
    handleOptionsFilter()
  }
  return (
    <div className="flex items-center justify-end gap-2">
      <button
        title="adicionar filtro de pendentes"
        onClick={handlePendingTasks}
        className="flex items-center justify-center gap-1 rounded bg-indigo-500 p-2 text-zinc-50"
      >
        Pendentes
      </button>
      <button
        title="adicionar filtro de concluídas"
        onClick={handleFinishedTasks}
        className="flex items-center justify-center gap-1 rounded bg-green-500 p-2 text-zinc-50"
      >
        Concluídas
      </button>
      <button
        title="remover filtro"
        onClick={handleRemoveFilter}
        className="flex items-center justify-center gap-1 rounded bg-red-400 p-2"
      >
        <Delete size={20} className="text-zinc-50" />
      </button>
    </div>
  )
}
