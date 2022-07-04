//dependencies
import React from 'react'

//components
import { TextAreaStyled } from './style'

import { TextAreaProps } from './interface'

export const TextArea = ({
  variant = 'primary',
  children
}: TextAreaProps) => {
  return (
    <TextAreaStyled variant={variant}>
      {children}
    </TextAreaStyled>
  )
}

export default TextArea
