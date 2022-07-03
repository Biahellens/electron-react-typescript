// dependencies
import styled from 'styled-components'

// components
import { Flex, Box } from 'reflexbox'

// interfaces
import { BoxProps } from 'reflexbox'

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  padding: 2rem;
`

export const Container = styled(Box)<BoxProps>`
  position: relative;
`
