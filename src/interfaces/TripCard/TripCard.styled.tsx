import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 20rem; */
  /* min-width: 20rem; */
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg.white200};
  /* border: 1px solid ${({ theme }) => theme.bg.white300}; */
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media (max-width: 768px) {
      grid-column: auto;
      grid-row: auto;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: height 0.2s ease-in-out;
    justify-self: start;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: end;
  padding: 0.5rem 1rem;
  height: fit-content;
  width: 100%;
  gap: 0.5rem;

  h3 {
    color: ${({ theme }) => theme.color.blue};
  }

  h3,
  p {
    justify-self: start;
    align-self: start;
  }

  button {
    justify-self: end;
    align-self: end;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;

    button {
      justify-self: start;
      align-self: stretch;
      padding: 0.4rem 0.5rem;
    }
  }
`

export const Price = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black};
  opacity: 0.6;
  flex: 1;
`
