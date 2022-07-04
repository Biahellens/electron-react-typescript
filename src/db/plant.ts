export interface Plant {
  id: number | null

  name: string
  size: string
  price: number
  dificulty: string
  category: string
  image: string
  description: string
}

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Jiboia',
    size: 'Pequena',
    price: 39.9,
    dificulty: 'Fácil',
    category: 'Casa',
    image:
      'https://s2.glbimg.com/O53KpOD9lRMs1VPDuv00-axfWAA=/smart/e.glbimg.com/og/ed/f/original/2021/02/24/epipremnum-pinnatum-marble-planet.png',
    description:
      'A rega: em estações quentes, você deve regar a sua planta jiboia 3 vezes por semana; em estações mais frias, você deve diminuir a frequência de rega. E a iluminação: a planta se adapta a locais com sombra, mas cresce melhor com luz indireta.',
  },
]
