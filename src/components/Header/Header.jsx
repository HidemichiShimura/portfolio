import styled from "styled-components";

import { HeaderLogo, BurgerMenu, NavMenu } from "../index";

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 2rem;
  border-bottom: 1px solid var(--accent-color);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: var(--main-color);
`;

const HeaderContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContentWrapper>
        <HeaderLogo />
        <BurgerMenu />
        <NavMenu />
      </HeaderContentWrapper>
    </StyledHeader>
  );
}
