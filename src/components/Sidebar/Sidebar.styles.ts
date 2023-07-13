import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--sidebar-bg);
  padding: 1.5rem 0 1.5rem 1.5rem;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transform: translate3d(-100%, 0, 0);
  transition: transform 0.4s ease-in-out, background-color 0.4s ease-in-out;
  box-sizing: border-box;
  height: inherit;
  overflow-y: auto;

  &.openSidebar {
    transform: translate3d(0, 0, 0);
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--sidebar-icon-fill);
    transition: color 0.4s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    transform: none;
  }
`;

export const Navigation = styled.nav`
  padding-right: 1.5rem;
`;

export const Toggle = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    appearance: none;
    background: transparent;
    border: none;
    font-size: 81.25%;
    color: var(--primary-base);
    cursor: pointer;

    .icon-collapsed {
      color: var(--primary-base);

      &.collapsed {
        transform: rotate(180deg);
      }
    }
  }
`;

export const CollpasedLabel = styled.span`
  &.collapsed {
    display: none;
  }
`;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Menu = styled.li`
  padding: 0.75rem 0;

  &.collapsed {
    display: none;
  }
`;

export const MenuLabel = styled.span`
  color: var(--sidebar-menu-heading-color);
  font-size: 81.25%;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const Hyperlink = styled.a`
  display: flex;
  padding: 0.75rem 0;
  gap: 0.75rem;
  align-items: stretch;
  text-decoration: none;
  color: var(--sidebar-link-color);
  transition: color 0.3s ease-in-out;

  &.active,
  &:hover {
    color: var(--sidebar-link-active-color);

    svg {
      color: var(--sidebar-icon-active-fill);
    }
  }
`;

export const ItemLabel = styled.span`
  &.collapsed {
    display: none;
  }
`;

export const ThemeWrapper = styled.div`
  background-color: var(--theme-switcher-bg);
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0.875rem;
  gap: 1.75rem;
  position: relative;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;

  &.collapsed {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--theme-switcher-indicator);
    border-radius: 50px;
    z-index: 0;
    left: 0;
    transform: translateX(var(--theme-switcher-indicator-pos));
    transition: transform 0.4s ease-in-out;
  }

  svg {
    z-index: 1;
  }

  .light__theme-icon {
    color: var(--sun-icon-fill);
  }

  .dark__theme-icon {
    color: var(--moon-icon-fill);
  }
`;
