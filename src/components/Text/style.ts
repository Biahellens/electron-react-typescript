import styled from 'styled-components'
import { typography, variant } from 'styled-system'

import { TextProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      fontSize: '18px',
      color: '#E6E6E6',
      marginTop: '4px',
    },

    secondary: {
      fontSize: '40px',
      color: '#F5F5F5',
      marginTop: '80px',
    },

    input: {
      fontSize: '14px',
      color: '#7CFC00',
      fontWeight: 'bold',
      marginTop: '10px',
    }
  }
}



export const TextStyled = styled('text')<TextProps>({
  margin: 0,
},
variant(variants), typography)
