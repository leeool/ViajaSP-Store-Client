import React from "react"
import "react-slideshow-image/dist/styles.css"
import { Arrow, Item, SlideContainer } from "./SlideShow.styled"
import { Button } from "@component/Form/Button"
import { ArrowRightIcon, ArrowLeftIcon } from "@primer/octicons-react"
import { Slide } from "react-slideshow-image"

interface Props {
  children: React.ReactNode
}

const arrows = {
  prevArrow: (
    <Arrow>
      <Button variant="secondary">
        <ArrowLeftIcon size={24} />
      </Button>
    </Arrow>
  ),
  nextArrow: (
    <Arrow>
      <Button variant="secondary">
        <ArrowRightIcon size={24} />
      </Button>
    </Arrow>
  )
}

const SlideShow = ({ children }: Props) => {
  return (
    <SlideContainer>
      <Slide indicators={true} {...arrows}>
        {children}
      </Slide>
    </SlideContainer>
  )
}

export const SlideItem = ({ children }: Props) => {
  return <Item>{children}</Item>
}

export default SlideShow
