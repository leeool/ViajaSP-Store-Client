import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  row-gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.bg.white200};
  padding: 0.5rem;
  border-radius: 1rem;

  span img {
    border-radius: 0.5rem;
    width: 100%;
    height: 10rem;
    grid-area: auto;
    cursor: zoom-in;
    object-fit: cover;
  }

  span {
    grid-row: 2 / 3;
  }

  span.active {
    cursor: default;
    grid-column: 1 / 4;
    grid-row: 1 / 2;

    img {
      height: 25rem;
    }
  }
`

export const Wrapper = styled.div`
  display: grid;
  align-content: start;
`

export const Info = styled.div`
  display: grid;
  gap: 1rem;
`

export const RelatedTrips = styled.div`
  grid-column: 1 / -1;
  display: grid;
`

export const Trips = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;

  & > * {
    scroll-snap-align: start;
    flex: 0 0 20rem;
  }
`
