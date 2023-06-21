import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 20rem;
  height: 15rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({theme}) => theme.bg.white300};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  `

export const Content = styled.div`
  background-color: ${({theme}) => theme.bg.white100};
  padding: 1rem;
  flex: 1;

  h3 {
    color: ${({theme}) => theme.color.blue}
  }

  p {
    color: ${({theme}) => theme.color.black}
  }
`