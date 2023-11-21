import TripCard from "@interface/TripCard/TripCard";
import React from "react";
import { Paragraph, Title } from "@component/Text";
import { BriefcaseIcon } from "@primer/octicons-react";
import { Container, PackageContainer } from "./Packages.styled";

interface Props {
  data: ITripPackage[];
}

export const Packages = ({ data }: Props) => {
  return (
    <Container>
      <div>
        <Paragraph>Conheça os melhores pacotes da Viaja SP</Paragraph>
        <Title size="2xl" as="h2" color="primary">
          <BriefcaseIcon size={32} /> Pacotes imperdíveis
        </Title>
      </div>
      <PackageContainer>
        {data?.map((tripPackage) => (
          <TripCard tripPackage={tripPackage} key={tripPackage.id} />
        ))}
      </PackageContainer>
    </Container>
  );
};
