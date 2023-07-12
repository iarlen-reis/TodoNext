import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex h-20 w-full items-center justify-center bg-zinc-900">
      <div className="flex w-full max-w-[1300px] flex-col items-center justify-between gap-2 p-3 sm:flex-row ">
        <p className="font-body text-xs leading-relaxed text-zinc-50 sm:text-lg">
          &copy; TodoNext 2023
        </p>
        <p className="font-body text-xs leading-relaxed text-zinc-50 sm:text-lg">
          Desenvolvido por{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/iarlen-reis"
            className="text-zinc-50 no-underline hover:underline"
          >
            Iarlen Reis
          </a>
        </p>
      </div>
    </footer>
  )
}
