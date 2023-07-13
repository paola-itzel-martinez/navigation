import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: var(--main-header-bg);
  padding: 1rem 1.5rem;
  transition: background-color 0.4s ease-in-out;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--top-bar-icon-fill);
    transition: color 0.4s ease-in-out;
  }

  .logo-icon {
    display: none;
  }

  @media screen and (min-width: 768px) {
    gap: 0.5rem;

    .icon {
      width: 1.25rem;
      height: 1.25rem;
    }

    .logo-icon {
      display: block;
      color: var(--top-bar-icon-fill);
      transition: color 0.4s ease-in-out;
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Toggle = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

export const LogoList = styled.li`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Hyperlink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    gap: 0.5rem;
  }
`;

export const Label = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-size: 81.25%;
    color: var(--main-header-link-color);
    transition: color 0.4s ease-in-out;
  }
`;
