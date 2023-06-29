import React from "react"
import {
  Container,
  Images,
  Info,
  RelatedTrips,
  Trips,
  Wrapper
} from "./TripPackage.styled"
import { useShowTripQuery, useTripsQuery } from "@/queries/useTripQueries"
import Image from "@component/Image/Image"
import { motion } from "framer-motion"
import { Paragraph, Title } from "@component/Text"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import TripCard from "@interface/TripCard/TripCard"
import SpinnerLoading from "@component/Loading/SpinnerLoading"

const TripPackage = () => {
  const { data, isLoading } = useShowTripQuery()
  const trips = useTripsQuery()

  if (!data || isLoading) return <SpinnerLoading />
  return (
    <Container>
      <ImagesStand data={data} />
      <Wrapper>
        <Paragraph size="xl" color="yellow">
          Grupo de viagem
        </Paragraph>
        <Title size="2xl" color="blue">
          {data.city.name}
        </Title>
        <Info>
          <Paragraph color="white400">{data.city.about}</Paragraph>
          <Paragraph color="blue" size="2xl">
            Apenas R${data.price},00 (pacote família)
          </Paragraph>
          <Paragraph color="blue" size="2xl">
            Transporte {data.transport}
          </Paragraph>
          <Paragraph color="blue" size="2xl">
            Saida{" "}
            {format(new Date(data.departureDate), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR
            })}
          </Paragraph>
          <Paragraph color="blue" size="2xl">
            Retorno{" "}
            {format(new Date(data.returnDate), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR
            })}
          </Paragraph>
        </Info>
      </Wrapper>
      <RelatedTrips>
        <Title size="2xl" color="blue">
          Mais viagens
        </Title>
        <Trips>
          {trips.data?.map((trip) => (
            <TripCard key={trip.id} tripPackage={trip} />
          ))}
        </Trips>
      </RelatedTrips>
    </Container>
  )
}

interface ImagesProps {
  data: ITripPackage
}

const ImagesStand = ({ data }: ImagesProps) => {
  const [imageActive, setImageActive] = React.useState(0)

  const handleImages = (e: React.MouseEvent) => {
    const target = e.currentTarget

    if (target instanceof HTMLSpanElement) {
      setImageActive(Number(target.dataset.index))
    }
  }

  return (
    <Images as={motion.div}>
      {data.city.images.map((image, index) => (
        <motion.span
          onClick={handleImages}
          data-index={index}
          className={imageActive === index ? "active" : ""}
          layout
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.4, stiffness: 100 }
          }}
        >
          <Image src={image} />
        </motion.span>
      ))}
    </Images>
  )
}

export default TripPackage
