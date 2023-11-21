import React from "react";
import {
  About,
  Buttons,
  Container,
  Images,
  Info,
  Item,
  Price,
  RelatedTrips,
  Trips,
  Wrapper,
} from "./TripPackage.styled";
import { useShowTripQuery, useTripsQuery } from "@/queries/useTripQueries";
import Image from "@component/Image/Image";
import { motion } from "framer-motion";
import { Paragraph, Title } from "@component/Text";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import TripCard from "@interface/TripCard/TripCard";
import { Button } from "@component/Form/Button";
import { BookmarkIcon, PaperAirplaneIcon } from "@primer/octicons-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TripPackage = () => {
  const { data, isLoading } = useShowTripQuery();
  const trips = useTripsQuery();

  if (!data || isLoading) return <PageLoading />;
  return (
    <Container>
      <ImagesStand data={data} />
      <Wrapper>
        <Paragraph size="xl" color="white400">
          Grupo de viagem
        </Paragraph>
        <Title size="2xl" color="primary">
          {data.city.name}
        </Title>
        <Info>
          <About color="white400">{data.city.about}</About>
          <Price>R$ {data.price.toLocaleString("pt-BR")}</Price>
          <Item>
            <span>Transporte:</span> {data.transport}
          </Item>
          <Item>
            <span>Saída: </span>
            {format(new Date(data.departureDate), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR,
            })}
          </Item>
          <Item>
            <span>Retorno: </span>
            {format(new Date(data.returnDate), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR,
            })}
          </Item>
        </Info>
        <Buttons>
          <Button shape="rounded" variant="secondary">
            Favoritar
            <BookmarkIcon size={24} />
          </Button>
          <Button shape="rounded">
            Reservar
            <PaperAirplaneIcon size={24} />
          </Button>
        </Buttons>
      </Wrapper>
      <RelatedTrips>
        <Title size="2xl" color="primary">
          Mais viagens
        </Title>
        <Trips>
          {trips.data
            ?.filter((trip) => trip.id !== data.id)
            .map((trip) => <TripCard key={trip.id} tripPackage={trip} />)}
        </Trips>
      </RelatedTrips>
    </Container>
  );
};

interface ImagesProps {
  data: ITripPackage;
}

const ImagesStand = ({ data }: ImagesProps) => {
  const [imageActive, setImageActive] = React.useState(0);

  const handleImages = (e: React.MouseEvent) => {
    const target = e.currentTarget;

    if (target instanceof HTMLSpanElement) {
      setImageActive(Number(target.dataset.index));
    }
  };

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
            layout: { duration: 0.4, stiffness: 100 },
          }}
        >
          <Image src={image} />
        </motion.span>
      ))}
    </Images>
  );
};

const PageLoading = () => {
  return (
    <Container>
      <div>
        <Skeleton height={"33rem"} width={"100%"} />
      </div>
      <div style={{ display: "grid", gap: "1rem", alignSelf: "end" }}>
        <Skeleton count={2} height={"2rem"} width={"50%"} />
        <Skeleton count={1} height={"10rem"} />
        <Skeleton count={1} height={"5rem"} />
        <Skeleton count={1} height={"5rem"} width={"50%"} />
      </div>
    </Container>
  );
};
export default TripPackage;
