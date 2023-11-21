import SlideShow, { SlideItem } from "@component/SlideShow/SlideShow";
import React from "react";
import { Container, Content, Info, Tag } from "./PackagesShowcase.styled";
import Image from "@component/Image/Image";
import { Title } from "@component/Text";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

interface Props {
  data: ITripPackage[];
}

const PackagesShowcase = ({ data }: Props) => {
  return (
    <Container>
      <Tag>Imperdível!</Tag>
      <SlideShow>
        {data?.map((tripPackage) => (
          <SlideItem key={tripPackage.id}>
            <Content as={Link} to={`/viagem/${tripPackage.id}`}>
              <Image src={tripPackage?.city.images[0]} />
              <Info className="info">
                <p>Pacote família para</p>
                <Title size="2xl" color="primary">
                  {tripPackage?.city.name || <Skeleton />}
                </Title>
                <p>
                  Por apenas{" "}
                  <span className="price">
                    R${" "}
                    {tripPackage?.price.toLocaleString("pt-BR") || <Skeleton />}
                  </span>
                </p>
              </Info>
            </Content>
          </SlideItem>
        ))}
      </SlideShow>
    </Container>
  );
};

export default PackagesShowcase;
