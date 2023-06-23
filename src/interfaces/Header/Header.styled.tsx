import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg.blue};
  color: ${({ theme }) => theme.color.white100};
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  gap: 0.5rem;
`

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`
