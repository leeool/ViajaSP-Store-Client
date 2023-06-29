import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  height: 35rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-content: center;
    gap: 1rem;
  }
`

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  height: 55em;
  filter: brightness(0.4);
  z-index: -1;
`

export const Column1 = styled.div`
  h1 span {
    display: inline;
    font-size: inherit;
    color: ${({ theme }) => theme.color.yellow};
  }

  h1 {
    display: block;
  }
`

export const Column2 = styled.div`
  align-self: center;

  @media (max-width: 768px) {
    grid-row: 1 / 2;
  }
`
