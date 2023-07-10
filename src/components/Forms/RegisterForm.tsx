'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAuthContext } from '@/contexts/authContext'
import { InputField } from '../InputField'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface IFormProps {
  name: string
  email: string
  password: string
}

export const RegisterForm = () => {
  const [loadingRegister, setLoadingRegister] = useState(false)
  const { userRegister } = useAuthContext()
  const router = useRouter()

  const methods = useForm<IFormProps>()

  const handleCreateUser = (user: IFormProps) => {
    setLoadingRegister(true)
    userRegister(user)
      .then((response) => {
        router.push('/login')
        console.log('criei')
      })
      .catch((error: AxiosError | AxiosError) => {
        if (error.response?.data) {
          const { error: message } = error.response.data

          toast.error(message)
        }
      })
      .finally(() => {
        setLoadingRegister(false)
      })
  }

  return (
    <div className="w-full sm:w-1/2">
      <div className="flex flex-col gap-1">
        <h1 className="font-title text-2xl">Vamos começar!</h1>
        <p className="font-body text-sm italic text-zinc-500">
          Crie sua conta agora.
        </p>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleCreateUser)}
          className="mt-7 flex w-full flex-col gap-4"
        >
          <InputField
            name="name"
            label="Nome completo"
            disabled={loadingRegister}
            placeholder="Nikola Jokic "
            rules={{ required: 'Campo obrigatório.' }}
          />
          <InputField
            name="email"
            label="E-mail"
            type="email"
            disabled={loadingRegister}
            placeholder="Email@email.com"
            rules={{ required: 'Campo obrigatório.' }}
          />
          <InputField
            name="password"
            label="Senha"
            type="password"
            disabled={loadingRegister}
            placeholder="**********"
            rules={{
              required: 'Campo obrigatório.',
              minLength: {
                value: 6,
                message: 'Deve conter no mínimo 6 caracteres.',
              },
            }}
          />
          <button
            disabled={loadingRegister}
            className="w-full rounded-md bg-blue-600 py-3 text-center font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-zinc-500"
          >
            {loadingRegister ? 'Aguarde...' : 'Cadastrar'}
          </button>
          {!loadingRegister && (
            <p className="mt-2 text-center font-body text-sm italic text-zinc-500">
              Já possui uma conta?{' '}
              <Link
                href="/login"
                className="font-body font-medium text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          )}
        </form>
      </FormProvider>
    </div>
  )
}
