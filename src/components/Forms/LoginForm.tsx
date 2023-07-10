'use client'
import React, { useState } from 'react'
import { Github } from 'lucide-react'
import { BiLogoGmail } from 'react-icons/bi'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { InputField } from '../InputField'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface IFormProps {
  email: string
  password: string
}

export const LoginForm = () => {
  const [loginLoading, setLoginLoading] = useState(false)
  const methods = useForm<IFormProps>()
  const router = useRouter()

  const handleLoginUser = async (user: IFormProps) => {
    setLoginLoading(true)
    await signIn<'credentials'>('credentials', {
      ...user,
      redirect: false,
      callbackUrl: '/',
    })
      .then((response) => {
        if (response?.error !== null) {
          return toast.error(response?.error)
        }
        router.push('/')
      })
      .finally(() => {
        setLoginLoading(false)
      })
  }

  return (
    <div className="flex w-full flex-col gap-4 sm:w-1/2">
      <div className="flex flex-col gap-1">
        <h1 className="font-title text-2xl">Vamos começar!</h1>
        <p className="font-body text-sm italic text-zinc-500">
          Escolha uma das opções para logar.
        </p>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleLoginUser)}
          className="mt-7 flex w-full flex-col gap-4"
        >
          <InputField
            name="email"
            label="E-mail"
            type="email"
            disabled={loginLoading}
            placeholder="Email@email.com"
            rules={{ required: 'Campo obrigatório' }}
          />
          <InputField
            name="password"
            label="Senha"
            type="password"
            disabled={loginLoading}
            placeholder="**********"
            rules={{
              required: 'campo obrigatório.',
              minLength: {
                value: 6,
                message: 'Deve possui no mínimo 6 caracteres.',
              },
            }}
          />
          <button
            disabled={loginLoading}
            className="w-full rounded-md bg-blue-600 py-3 text-center font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-zinc-500"
          >
            {loginLoading ? 'Aguarde...' : 'Entrar'}
          </button>
        </form>
      </FormProvider>
      <div className="flex w-full items-center justify-center gap-2">
        <button
          disabled={loginLoading}
          onClick={() => signIn('google')}
          className="flex w-full max-w-[400px] items-center justify-center gap-1 rounded-md bg-red-400 py-3 font-medium text-white transition-colors hover:bg-red-300 disabled:cursor-not-allowed disabled:bg-zinc-500"
        >
          <BiLogoGmail size={24} />
          Google
        </button>
        <button
          disabled={loginLoading}
          onClick={() => signIn('github')}
          className="flex w-full max-w-[400px] items-center justify-center gap-1 rounded-md bg-zinc-800 py-3 font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-500"
        >
          <Github />
          GitHub
        </button>
      </div>
      {!loginLoading && (
        <p className="mt-2 text-center font-body text-sm italic text-zinc-500">
          Não possui uma conta?{' '}
          <Link
            href="/register"
            className="font-body font-medium text-blue-600 hover:underline"
          >
            Cadastrar
          </Link>
        </p>
      )}
    </div>
  )
}
