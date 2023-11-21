import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Root = styled(DropdownMenu.Root)``;

export const Trigger = styled(DropdownMenu.Trigger)`
  background: transparent;
  all: unset;
`;

export const Content = styled(DropdownMenu.Content)`
  background-color: #fff;
  z-index: 100;
  border-radius: 0.25rem;
  box-shadow:
    10px 10px 10px -3px rgba(0, 0, 0, 0.1),
    -10px -10px 10px -3px rgba(0, 0, 0, 0.1);
  width: 15rem;
  overflow: hidden;
  transition: height 0.2s ease-in-out;

  &[data-state="open"] {
    animation: slideDownAndFade 0.3s ease;
  }

  &[data-state="closed"] {
    animation: slideUpAndFade 0.1s ease;
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0.5;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0.5;
      transform: translateY(-10px);
    }
  }
`;

export const Group = styled(DropdownMenu.Group)`
  display: grid;
`;

export const Label = styled(DropdownMenu.Label)`
  width: 100%;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.4rem;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white100};
  border-radius: 4px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled(DropdownMenu.Item)`
  padding: 0.2rem 0.6rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  outline: none;
  padding: 1rem 3rem;

  &:hover {
    background-color: ${({ theme }) => theme.bg.white200};
  }
`;

export const Arrow = styled(DropdownMenu.Arrow)`
  fill: ${({ theme }) => theme.bg.secondary};
`;
