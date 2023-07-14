'use client'
import React from 'react'
import Link from 'next/link'
import { FilterOptions } from '@/components/FilterOptions'
import { useFilterContext } from '@/contexts/filterContext'
import { MenuToolsSkeleton } from './skeletons/MenuToolsSkeleton'
import { useTasks } from '@/hooks/useTasks'
import { Filter, Plus } from 'lucide-react'

export const MenuTools = () => {
  const { tasksLoading } = useTasks()
  const { handleOptionsFilter, optionsFilter } = useFilterContext()

  return (
    <div className="flex flex-col gap-3">
      {!tasksLoading ? (
        <>
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={handleOptionsFilter}
              className="group flex h-11 w-11 items-center justify-center rounded-full py-1 transition-colors hover:animate-pulse  hover:bg-zinc-900"
            >
              <Filter
                size={20}
                className="text-zinc-900 group-hover:text-zinc-100"
              />
            </button>
            <Link
              href="/create"
              className="group flex h-11 w-11 items-center justify-center rounded-full py-1 transition-colors hover:animate-pulse hover:bg-zinc-900"
            >
              <Plus
                size={20}
                className="text-zinc-900 group-hover:text-zinc-100"
              />
            </Link>
          </div>
          {optionsFilter && <FilterOptions />}
        </>
      ) : (
        <MenuToolsSkeleton />
      )}
    </div>
  )
}
