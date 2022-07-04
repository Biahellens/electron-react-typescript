// dependencies
import styled from 'styled-components'

// components
import { Flex, Box } from 'reflexbox'

// interfaces
import { BoxProps } from 'reflexbox'

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;
`

export const Container = styled(Box)<BoxProps>`
  display: flex;
  margin: 0;
`

export const InputBox = styled(Box)<BoxProps>`
  padding-Top: 1.2rem;
`
