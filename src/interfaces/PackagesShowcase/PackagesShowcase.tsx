import SlideShow, { SlideItem } from "@component/SlideShow/SlideShow"
import React from "react"
import { Content, Info } from "./PackagesShowcase.styled"
import { useQuery } from "react-query"
import axiosInstance from "@/API/axiosInstance"
import Image from "@component/Image/Image"
import { Title } from "@component/Text"

const PackagesShowcase = () => {
  const { data } = useQuery<ITripPackage[]>({
    queryKey: "tripPackages",
    queryFn: () => {
      return axiosInstance.get("/trip-package").then((res) => res.data)
    }
  })

  if (!data) return <h1>carregando...</h1>
  return (
    <SlideShow>
      {data.map((tripPackage) => (
        <SlideItem key={tripPackage.id}>
          <Content>
            <Image src={tripPackage.city.images[0]} />
            <Info className="info">
              <p>Pacote família para</p>
              <Title size="2xl" color="yellow">
                {tripPackage.city.name}
              </Title>
              <p>
                Por apenas{" "}
                <span className="price">R${tripPackage.price},00 </span>
              </p>
            </Info>
          </Content>
        </SlideItem>
      ))}
    </SlideShow>
  )
}

export default PackagesShowcase
