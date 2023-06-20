import React from "react"
import { Container, Fallback, Img } from "./Image.styled"

interface Props {
  src: string
}

const Image = ({ src }: Props) => {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <>
      <Img src={src} alt="" loaded={loaded} onLoad={() => setLoaded(true)} />
      {!loaded && <Fallback />}
    </>
  )
}

export default Image
