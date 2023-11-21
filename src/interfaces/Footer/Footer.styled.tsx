import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bg.secondary};
  padding: 1rem 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  gap: 5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  align-self: flex-start;
  max-width: 15rem;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 50rem;
  width: 100%;
  justify-content: space-between;
`;

export const Item = styled.div`
  color: ${({ theme }) => theme.color.white100};
  flex: 1;

  p {
    opacity: 0.8;
  }
`;
