import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bg.blue};
  padding: 1rem 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  gap: 5rem;
  z-index: 100;
  flex-wrap: wrap;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.white100};
  align-self: flex-start;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex: 1;
  max-width: 60rem;
`

export const Item = styled.div`
  color: ${({ theme }) => theme.color.white100};
  flex: 1;

  p {
    opacity: 0.8;
  }
`
