import SlideShow, { SlideItem } from "@component/SlideShow/SlideShow"
import React from "react"
import { Container, Content, Info, Tag } from "./PackagesShowcase.styled"
import { useQuery } from "react-query"
import axiosInstance from "@/API/axiosInstance"
import Image from "@component/Image/Image"
import { Title } from "@component/Text"
import useStore from "@/stores/useStore"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const PackagesShowcase = () => {
  const { data, isLoading } = useQuery<ITripPackage[] | []>({
    queryKey: "tripPackages",
    queryFn: async () => {
      return axiosInstance.get("/trip-package").then((res) => res.data)
    }
  })
  const setLoading = useStore((state) => state.setLoading)

  React.useEffect(() => {
    console.log(isLoading)
    setLoading(isLoading)
  }, [isLoading, setLoading])

  if (!data || isLoading) return null
  return (
    <Container>
      <Tag>Imperdível!</Tag>
      <SlideShow>
        {data.map((tripPackage) => (
          <SlideItem key={tripPackage.id}>
            <Content>
              <Image src={tripPackage?.city.images[0]} />
              <Info className="info">
                <p>Pacote família para</p>
                <Title size="2xl" color="yellow">
                  {tripPackage?.city.name || <Skeleton />}
                </Title>
                <p>
                  Por apenas{" "}
                  <span className="price">
                    R${tripPackage?.price || <Skeleton />},00{" "}
                  </span>
                </p>
              </Info>
            </Content>
          </SlideItem>
        ))}
      </SlideShow>
    </Container>
  )
}

export default PackagesShowcase
