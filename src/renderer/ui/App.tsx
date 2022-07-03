import React, { useEffect, useState } from "react"
import { getDate } from "../../common/getDate"

import styles from "./App.module.scss"
import logo from "../public/logo192.png"

//components
import { Wrapper, Container } from "./style"

export const App: React.FC = () => {

  const [date, setDate] = useState(getDate())

  useEffect(() => {
    setTimeout(() => setDate(getDate()), 1000)
  }, [date, setDate])

  return (
    <Wrapper>
      <Container>
        <p>oi</p>
      </Container>
    </Wrapper>
  )
}
