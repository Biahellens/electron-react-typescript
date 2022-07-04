import styled from 'styled-components'
import { variant } from 'styled-system'

import { InputProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      width: '320px',
    },

    secondary: {
      width: '160px',
    },

    url: {
      width: '480px',
    }
  }
}

export const InputStyled = styled('input')<InputProps>(
  {
    fontSize: '14px',
    padding: 'm',
    minHeight: '40px',

    borderColor: '#9ACD32',
    borderRadius: '10px',

		display: 'block',

    color: 'black',

    '&:hover': {
      background: "#e9f7df",
      borderColor: '#9ACD32',
    },
  },
variant(variants))
