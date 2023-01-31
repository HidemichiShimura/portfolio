import styled from "styled-components";

import { MEDIA_TABLET, MEDIA_LAPTOP, COPYRIGHT_TEXT } from "@/constants";

const FooterContainer = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--accent-color);

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    height: 60px;
  }
`;

const FooterText = styled.p`
  font-size: 8px;

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    font-size: 10px;
  }

  @media only screen and (min-width: ${MEDIA_LAPTOP}) {
    font-size: 12px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; {COPYRIGHT_TEXT}</FooterText>
    </FooterContainer>
  );
}
