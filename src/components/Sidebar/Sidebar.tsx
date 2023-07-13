import {
  ArrowLeftOnRectangleIcon,
  BuildingLibraryIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import {
  CollpasedLabel,
  Hyperlink,
  ItemLabel,
  Menu,
  MenuLabel,
  Navigation,
  ThemeWrapper,
  Toggle,
  UnorderedList,
  Wrapper,
} from "./Sidebar.styles";
import { SidebarProps } from "./Sidebar.types";

const items = [
  {
    label: "Manage",
    subitems: [
      {
        label: "Dashboard",
        icon: BuildingLibraryIcon,
        href: "#",
        isActive: true,
      },
      {
        label: "Aparence",
        icon: BuildingLibraryIcon,
        href: "#",
        isActive: false,
      },
      {
        label: "Plugins",
        icon: BuildingLibraryIcon,
        href: "#",
        isActive: false,
      },
      {
        label: "Users",
        icon: BuildingLibraryIcon,
        href: "#",
        isActive: false,
      },
      {
        label: "Settings",
        icon: BuildingLibraryIcon,
        href: "#",
        isActive: false,
      },
    ],
  },
  {
    label: "Content",
    subitems: [
      {
        label: "Posts",
        icon: BuildingLibraryIcon,
        href: "#",
        isActive: false,
      },
      {
        label: "Media",
        icon: BuildingLibraryIcon,
        href: "#",
        isActive: false,
      },
      {
        label: "Pages",
        icon: BuildingLibraryIcon,
        href: "#",
        isActive: false,
      },
      {
        label: "Comments",
        icon: BuildingLibraryIcon,
        href: "#",
        isActive: false,
      },
    ],
  },
];

const Sidebar = ({ openSidebar }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const wrapperClassname = `${openSidebar ? "openSidebar" : ""}`;
  const collapsedClassName = collapsed ? "collapsed" : "";
  const collapsedIconClassName = `icon icon-collapsed ${collapsedClassName}`;

  const handleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <Wrapper className={wrapperClassname}>
      <Toggle onClick={handleCollapsed}>
        <ArrowLeftOnRectangleIcon className={collapsedIconClassName} />
        <CollpasedLabel className={collapsedClassName}>
          Collapse menu
        </CollpasedLabel>
      </Toggle>

      <Navigation>
        <UnorderedList>
          {items.map((item) => (
            <>
              <Menu className={`menu-heading ${collapsedClassName}`}>
                <MenuLabel>{item.label}</MenuLabel>
              </Menu>

              {item.subitems.map(({ icon: Icon, ...subitem }) => (
                <li>
                  <Hyperlink
                    href={subitem.href}
                    className={subitem.isActive ? "active" : ""}
                  >
                    <Icon className="icon" />
                    <ItemLabel className={collapsedClassName}>
                      {subitem.label}
                    </ItemLabel>
                  </Hyperlink>
                </li>
              ))}
            </>
          ))}
        </UnorderedList>
      </Navigation>

      <ThemeWrapper className={collapsedClassName}>
        <SunIcon className="icon light__theme-icon" />
        <MoonIcon className="icon dark__theme-icon" />
      </ThemeWrapper>
    </Wrapper>
  );
};

export default Sidebar;
