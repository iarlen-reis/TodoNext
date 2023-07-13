'use client'
import React from 'react'
import { Filter, Plus } from 'lucide-react'
import { useTasks } from '@/hooks/useTasks'
import Link from 'next/link'
import { MenuToolsSkeleton } from './skeletons/MenuToolsSkeleton'

export const MenuTools = () => {
  const { tasksLoading } = useTasks()
  return (
    <div className="flex items-center justify-end gap-4">
      {!tasksLoading ? (
        <>
          <button className="group flex h-11 w-11 items-center justify-center rounded-full py-1 transition-colors hover:bg-zinc-900">
            <Filter
              size={20}
              className="text-zinc-900 group-hover:text-zinc-100"
            />
          </button>
          <Link
            href="/create"
            className="group flex h-11 w-11 items-center justify-center rounded-full py-1 transition-colors hover:bg-zinc-900"
          >
            <Plus
              size={20}
              className="text-zinc-900  group-hover:text-zinc-100"
            />
          </Link>
        </>
      ) : (
        <MenuToolsSkeleton />
      )}
    </div>
  )
}
