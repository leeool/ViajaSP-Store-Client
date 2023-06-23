import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: 1rem;
`

export const PackageContainer = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  width: 100%;
  scroll-snap-type: x mandatory;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`
