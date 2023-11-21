import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Root = styled(DropdownMenu.Root)``;

export const Trigger = styled(DropdownMenu.Trigger)`
  background: transparent;
  all: unset;
`;

export const Content = styled(DropdownMenu.Content)`
  background-color: ${({ theme }) => theme.bg.primary};
  padding: 0.5rem;
  z-index: 100;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  width: 12rem;
  border: 2px solid ${({ theme }) => theme.color.white100};
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
  gap: 0.5rem;
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
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  background-color: ${({ theme }) => theme.bg.white100};
  outline: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.bg.secondary};
  }
`;

export const Arrow = styled(DropdownMenu.Arrow)`
  fill: ${({ theme }) => theme.bg.secondary};
`;
