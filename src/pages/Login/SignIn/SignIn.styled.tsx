import styled from "styled-components"

export const Container = styled.form`
  display: grid;
  gap: 1rem;
  justify-items: end;
`

export const Back = styled.span`
  color: ${({ theme }) => theme.color.white200};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.white100};
  }
`

export const Wrapper = styled.div`
  justify-self: start;
`
