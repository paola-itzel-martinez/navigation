import React from "react";
import {
  Bars3Icon,
  BoltIcon,
  UserIcon,
  PlusCircleIcon,
  ChatBubbleOvalLeftIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import {
  Label,
  LogoList,
  Hyperlink,
  Navigation,
  Toggle,
  UnorderedList,
  Wrapper,
} from "./Header.styles";
import { HeaderProps } from "./Header.types";

const items = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "#",
  },
  {
    label: "2",
    icon: ChatBubbleOvalLeftIcon,
    href: "#",
  },
  {
    label: "New",
    icon: PlusCircleIcon,
    href: "#",
  },
];

const Header = ({ handleOpenSidebar }: HeaderProps): JSX.Element => {
  return (
    <Wrapper>
      <Navigation>
        <Toggle onClick={handleOpenSidebar}>
          <Bars3Icon className="icon" />
        </Toggle>

        <UnorderedList>
          <LogoList>
            <Hyperlink>
              <BoltIcon className="logo-icon" />
            </Hyperlink>
          </LogoList>

          {items.map(({ icon: Icon, ...item }) => (
            <li>
              <Hyperlink href={item.href}>
                <Icon className="icon" />
                <Label>{item.label}</Label>
              </Hyperlink>
            </li>
          ))}
        </UnorderedList>

        <Hyperlink href="#">
          <Label>Welcome, admin</Label>
          <UserIcon className="icon" />
        </Hyperlink>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
