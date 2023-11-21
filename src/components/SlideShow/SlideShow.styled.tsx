import styled from "styled-components";

export const SlideContainer = styled.div`
  .react-slideshow-container {
    border-radius: 0.5rem;
    overflow: hidden;
  }
`;
export const Item = styled.div`
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
`;

export const Arrow = styled.div`
  padding: 0 0.5rem;

  button {
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }

    path,
    svg {
      stroke-width: 5px;
    }
  }
`;
