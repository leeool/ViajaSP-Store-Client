import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

  h1 {
    text-align: center;
  }
`;

export const Logo = styled.div`
  display: grid;
  align-items: center;
  place-self: center;
  width: 100%;
  padding: 5rem;
  background-color: ${({ theme }) => theme.bg.primary};

  span,
  a {
    justify-self: center;
    display: flex;
    font-size: 2rem;
    align-items: center;
    font-weight: 500;
    gap: 0.5rem;
    color: ${({ theme }) => theme.color.white100};
  }
`;

export const Content = styled.div`
  display: grid;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.bg.white200};
  max-width: 40rem;
  overflow: hidden;

  .loading {
    width: 100%;

    max-width: 100px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  padding: 2rem;

  justify-items: center;
`;
