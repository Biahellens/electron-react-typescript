import { HTMLAttributes } from 'react'

export type TextProps = {
  variant?: 'primary' | 'secondary' | 'input' 
} & HTMLAttributes<HTMLElement>
