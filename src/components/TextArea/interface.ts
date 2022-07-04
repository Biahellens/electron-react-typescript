import { TextareaHTMLAttributes } from 'react'

export type TextAreaProps = {
  variant?: 'primary'
} & TextareaHTMLAttributes<HTMLTextAreaElement>
