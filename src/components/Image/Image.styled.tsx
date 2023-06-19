import styled from "styled-components"

interface Props {
  loaded: boolean
}

export const Img = styled.img<Props>`
  width: 100%;
  height: auto;
  object-fit: cover;
  grid-area: 1 / -1;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`

export const Fallback = styled.div`
  grid-area: 1 / -1;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bg.white300};
  display: flex;
  z-index: -1;
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.bg.white300} 0px,
    ${({ theme }) => theme.bg.white200} 50%,
    ${({ theme }) => theme.bg.white300} 100%
  );
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0%;
    }
    to {
      background-position: -200%;
    }
  }
`
