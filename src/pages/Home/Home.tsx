import axiosInstance from "@/API/axiosInstance"
import SlideShow, { SlideItem } from "@component/SlideShow/SlideShow"
import PackagesShowcase from "@interface/PackagesShowcase/PackagesShowcase"
import TripCard from "@interface/TripCard/TripCard"
import React from "react"
import { useQuery } from "react-query"
import { Container, PackageContainer } from "./Home.styled"

const Home = () => {
  return (
    <Container>
      <PackagesShowcase />
      <Packages />
    </Container>
  )
}

const Packages = () =>  {
  const {data, isLoading} = useQuery<ITripPackage[]>({
    queryKey: ["packages"],
    queryFn: () => {
      return axiosInstance.get("/trip-package").then(res => res.data)
    }
  })

  if(isLoading) return <div>carregando...</div>
  return <PackageContainer>
    {data?.map(tripPackage => (
      <TripCard tripPackage={tripPackage}/>
    ))}
    {data?.map(tripPackage => (
      <TripCard tripPackage={tripPackage}/>
    ))}
    {data?.map(tripPackage => (
      <TripCard tripPackage={tripPackage}/>
    ))}
  </PackageContainer>
}

export default Home
