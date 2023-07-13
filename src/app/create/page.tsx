import { CreateTaskForm } from '@/components/forms/CreateTaskForm'
import React from 'react'

const Create = () => {
  return (
    <div className="m-auto py-4 pb-10">
      <div className="relative m-auto flex w-full max-w-[500px] flex-col gap-4 rounded-md p-3 sm:px-5 lg:px-6">
        <div className="flex flex-col">
          <h1 className="font-title text-xl sm:text-2xl lg:text-3xl">
            Criar tarefa
          </h1>
          <p className="font-body text-xs italic sm:text-sm">
            Crie sua tarefa de forma fácil.
          </p>
        </div>
        <CreateTaskForm />
      </div>
    </div>
  )
}

export default Create
