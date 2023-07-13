import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--gray-alpha-80);
  opacity: 1;
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  overflow: hidden;
  visibility: hidden;

  &.openSidebar {
    visibility: visible;
  }

  @media screen and (min-width: 768px) {
    visibility: hidden;
  }
`;
