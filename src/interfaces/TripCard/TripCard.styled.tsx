import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  min-width: 20rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg.white200};
  /* border: 1px solid ${({ theme }) => theme.bg.white300}; */
  scroll-snap-align: start;
  cursor: pointer;

  img {
    width: 100%;
    height: 5rem;
    object-fit: cover;
    transition: height 0.2s ease-in-out;
    justify-self: start;
  }

  &:hover {
    img {
      height: 100%;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: end;
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;

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
`

export const Price = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black};
  opacity: 0.6;
  flex: 1;
`
