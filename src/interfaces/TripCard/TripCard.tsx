import Image from '@component/Image/Image'
import { Title } from '@component/Text'
import React from 'react'
import { Container, Content } from './TripCard.styled'

interface Props {
  tripPackage: ITripPackage
}

const TripCard = ({tripPackage}: Props) => {
  return (
    <Container>
      <Image src={tripPackage.city.images[0]}/>
      <Content>
          <Title size='md' as="h3">{tripPackage.city.name}</Title>
          <p>R${tripPackage.price},00</p>
      </Content>
    </Container>
  )
}

export default TripCard