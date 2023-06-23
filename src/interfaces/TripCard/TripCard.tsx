import Image from "@component/Image/Image"
import { Title } from "@component/Text"
import React from "react"
import { Container, Content, Price } from "./TripCard.styled"
import { Button } from "@component/Form/Button"
import { SearchIcon } from "@primer/octicons-react"

interface Props {
  tripPackage: ITripPackage
}

const TripCard = ({ tripPackage }: Props) => {
  return (
    <Container>
      <Image src={tripPackage.city.images[0]} />
      <Content>
        <Title size="lg" as="h3">
          Pacote {tripPackage.city.name}
        </Title>
        <Price>R${tripPackage.price},00</Price>
        <Button shape="rounded">
          <SearchIcon />
          Ver mais
        </Button>
      </Content>
    </Container>
  )
}

export default TripCard
