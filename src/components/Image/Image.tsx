import React, { HTMLAttributes } from "react"
import { Container, Fallback, Img } from "./Image.styled"
import { StyledComponentProps } from "styled-components/dist/types"

interface Props
  extends StyledComponentProps<
    "web",
    "img",
    HTMLAttributes<HTMLImageElement>,
    never
  > {
  src: string | undefined
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  props?: StyledComponentProps<
    "web",
    "img",
    HTMLAttributes<HTMLImageElement>,
    never
  >
}

const Image = ({ src, as, ...props }: Props) => {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <Container className="image-fallback">
      <Img
        src={src}
        alt=""
        as={as}
        loaded={loaded}
        onLoad={() => setLoaded(true)}
        {...props}
      />
      {!loaded && <Fallback />}
    </Container>
  )
}

export default Image
