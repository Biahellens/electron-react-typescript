import styled from 'styled-components'
import { variant } from 'styled-system'

import { ButtonProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      minWidth: '120px',
    }
  }
}

export const ButtonStyled = styled('button')<ButtonProps>(
  {
    height: '40px',

    background: "#9ACD32",

    borderColor: '#e9f7df',
    borderRadius: '10px',

    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '10px',

    alignItems: 'center',
  },
variant(variants))
