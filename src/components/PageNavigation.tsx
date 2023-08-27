import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface IPageNavigationProps {
  title: string
}
const PageNavigation = ({ title }: IPageNavigationProps) => {
  return (
    <ul className="mt-3 flex items-center justify-start gap-1 font-body text-sm text-zinc-700">
      <li>
        <Link href="/" className="font-medium hover:text-zinc-800">
          Página inicial
        </Link>
      </li>
      <li>
        <ChevronRight size={12} />
      </li>
      <li>
        <span className="font-bold capitalize">{title}</span>
      </li>
    </ul>
  )
}

export default PageNavigation
