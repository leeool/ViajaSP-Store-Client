import styled from "styled-components"

export const Container = styled.div`
  margin-top: 5rem;

  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`

export const Section1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  position: relative;
  align-content: start;
  height: 30rem;

  p {
    grid-column: 1 / 2;
  }

  img {
    max-width: 45rem;
    width: 100%;
    object-fit: cover;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    height: auto;
    margin-bottom: 5rem;

    img {
      display: none;
    }
  }
`

export const SectionBar = styled.div`
  background-color: ${({ theme }) => theme.bg.blue};
  border-radius: 0.25rem;
  padding: 1rem;
  color: ${({ theme }) => theme.color.white100};
  position: relative;
  height: 20rem;
  display: grid;
  grid-template-columns: 0.7fr 1fr;

  img {
    position: absolute;
    bottom: 0;
  }

  div {
    display: grid;
    grid-column: 2 / -1;
    gap: 0.3rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
`

export const SectionTeam = styled.div`
  margin-top: 5rem;
  display: grid;
  gap: 1rem;
`

export const TeamCard = styled.div`
  display: grid;
  flex: 1 0 10rem;
  gap: 0.5rem;

  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`

export const TeamContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`
