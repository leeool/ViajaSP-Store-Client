import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const PackageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
  justify-items: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }
`
