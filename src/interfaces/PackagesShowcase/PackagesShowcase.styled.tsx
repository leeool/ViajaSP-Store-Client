import styled from "styled-components"

export const Content = styled.div`
  display: grid;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  user-select: none;

  &::after {
    content: "";
    box-shadow: inset 250px 0px 200px 0px rgba(0, 0, 0, 0.6),
      inset -50px 0px 100px 0px rgba(0, 0, 0, 0.6);
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0rem;
    z-index: 0;
  }

  img {
    grid-area: 1 / -1;
    transition: scale 0.3s ease-in-out;
  }

  &:hover img {
    scale: 1.1;
  }

  &:hover .info {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    &:hover img {
      scale: 1;
    }

    &:hover .info {
      transform: scale(1);
    }
  }
`
export const Info = styled.div`
  grid-area: 1 / -1;
  align-self: end;
  padding: 2rem;
  color: ${({ theme }) => theme.color.white100};
  z-index: 1;
  transition: transform 0.2s ease-in-out;
  transform-origin: bottom left;

  h1 {
    line-height: 100%;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    display: block;
  }

  .price {
    font-size: 1.6em;
    color: ${({ theme }) => theme.bg.yellow};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
