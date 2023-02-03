import Link from "next/link";

import styled from "styled-components";

import { INTRO, ABOUT, PROJECTS, CONTACT } from "@/constants";

const StyledNavMenu = styled.nav`
  width: 300px;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

const NavLinkContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const NavLink = styled(Link)`
  font-size: 12px;
  color: var(--accent-color);
`;

export default function NavMenu() {
  return (
    <StyledNavMenu>
      <NavLinkContainer>
        <li>
          <NavLink href="#intro">{INTRO}</NavLink>
        </li>
        <li>
          <NavLink href="#about">{ABOUT}</NavLink>
        </li>
        <li>
          <NavLink href="#projects">{PROJECTS}</NavLink>
        </li>
        <li>
          <NavLink href="#contact">{CONTACT}</NavLink>
        </li>
      </NavLinkContainer>
    </StyledNavMenu>
  );
}
