import React, { useEffect, useState } from "react"
import { getDate } from "../../common/getDate"

//components
import { Wrapper, Container, InputBox } from "./style"

import { Button, Input, Text,TextArea } from '../../components'

//imgs
import gardening from '../../assets/images/gardening.svg'

export const App: React.FC = () => {

  const [date, setDate] = useState(getDate())

  useEffect(() => {
    setTimeout(() => setDate(getDate()), 1000)
  }, [date, setDate])

  return (
    <Wrapper>
      <Container>
        <Container
          width={'100vh'}
          height={'100vh'}
          justifyContent='space-around'
          alignContent='center'
          flexWrap='wrap'
          padding='2rem'
          >

            <InputBox>
              <Text variant='input'>Nome</Text>
              <Input/>
            </InputBox>

            <InputBox>
              <Text variant='input'>Tamanho</Text>
              <Input variant='secondary'/>
            </InputBox>

            <InputBox>
              <Text variant='input'>Preço</Text>
              <Input variant='secondary'/>
            </InputBox>

            <InputBox>
              <Text variant='input'>Dificuldade</Text>
              <Input variant='secondary'/>
            </InputBox>

            <InputBox>
              <Text variant='input'>Categoria</Text>
              <Input variant='secondary'/>
            </InputBox>

            <InputBox>
              <Text variant='input'>url da imagem</Text>
              <Input variant='url'/>
            </InputBox>

            <InputBox>
              <Text variant='input'>Descrição</Text>
              <TextArea/>
            </InputBox>

            <Container>
              <Button>
                <Text>Adicionar</Text>
              </Button>
            </Container>
        </Container>
        <Container
          width={'100vh'}
          height={'100vh'}
          backgroundColor='#9ACD32'
          justifyContent='center'
          alignItems='center'
          flexWrap='wrap'
          >
          <Container
            width={[1]}
            justifyContent='center'
            alignItems='center'
            >
            <Text variant='secondary'>Adicione uma plantinha</Text>
          </Container>
          <Container
            width={[1]}
            justifyContent='center'
            alignItems='center'>
            <img src={gardening}  width={'500px'} height={'320px'}/>
          </Container>
        </Container>
      </Container>
    </Wrapper>
  )
}
