import axiosInstance from "@/API/axiosInstance"
import TripCard from "@interface/TripCard/TripCard"
import React from "react"
import { useQuery } from "react-query"
import { Paragraph, Title } from "@component/Text"
import { BriefcaseIcon } from "@primer/octicons-react"
import { Container, PackageContainer } from "./Packages.styled"

export const Packages = () => {
  const { data, isLoading } = useQuery<ITripPackage[]>({
    queryKey: ["packages"],
    queryFn: () => {
      return axiosInstance.get("/trip-package").then((res) => res.data)
    }
  })

  if (isLoading) return null
  return (
    <Container>
      <div>
        <Paragraph>Conheça os melhores pacotes da Viaja SP</Paragraph>
        <Title size="2xl" as="h2" color="blue">
          <BriefcaseIcon size={32} /> Pacotes imperdíveis
        </Title>
      </div>
      <PackageContainer>
        {data?.map((tripPackage) => (
          <TripCard tripPackage={tripPackage} key={tripPackage.id} />
        ))}
      </PackageContainer>
    </Container>
  )
}
