import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  height: calc(100vh - 64px);

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export const Main = styled.main`
  padding: 1.5rem;
  height: inherit;
  overflow-y: auto;
`;
