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
  position: fixed;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const VerifyAccount = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.yellow};
  color: ${({ theme }) => theme.color.black};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;

  span {
    display: block;
    font-size: 0.875rem;
    text-transform: none;
    font-weight: 400;
    margin-top: 0.3rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
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
