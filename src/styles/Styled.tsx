import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 5rem;
  flex: 1;
  padding: 1rem;
  justify-content: center;

  .loading {
    justify-self: center;
    max-width: 4rem;
    max-height: 4rem;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
