import styled from 'styled-components'
import { variant } from 'styled-system'

import { TextAreaProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      width: '480px',
    },
  }
}

export const TextAreaStyled = styled('textarea')<TextAreaProps>(
  {
    fontSize: '14px',
    padding: 'm',
    minRows: '2',
    maxRows: '12',

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
