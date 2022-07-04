import { InputHTMLAttributes } from 'react'

export type InputProps = {
  variant?: 'primary' | 'secondary' | 'url'
} & InputHTMLAttributes<HTMLInputElement>
