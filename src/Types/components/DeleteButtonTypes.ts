import { ButtonHTMLAttributes } from 'react'

export interface IDeleteButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
}
