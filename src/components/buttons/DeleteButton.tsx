'use client'

import { IDeleteButtonProps } from '@/Types/components/DeleteButtonTypes'
import { useTasks } from '@/hooks/useTasks'
import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteButton = ({ id, className }: IDeleteButtonProps) => {
  const { deleteTask } = useTasks()

  const handleDeleteTask = () => {
    deleteTask(id)
  }
  return (
    <button onClick={handleDeleteTask} className={className}>
      <Trash2 size={18} className="text-red-600" />
    </button>
  )
}

export default DeleteButton
