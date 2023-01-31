import Link from "next/link";
import styled from "styled-components";
import { IconContext } from "react-icons";

import { SectionLayout } from "@/components";

import {
  MEDIA_TABLET,
  CONTACT,
  CONTACT_TITLE,
  CONTACT_TEXT,
  SOCIALS,
  SOCIAL_DETAILS,
} from "@/constants";

const ContactText = styled.p`
  font-size: 18px;
  letter-spacing: 1px;

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    font-size: 24px;
  }
`;

const SocialIconsContainer = styled.ul`
  display: flex;
  margin-top: 30px;
`;

const SocialIcon = styled.li`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  &:hover {
    color: var(--main-color);
    background-color: var(--accent-color);
    transition-duration: 1s;
  }

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    margin: 0 5px;
  }
`;

const IconContainer = styled(Link)`
  height: 100%;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--main-color);
    transition-duration: 1s;
  }
`;

export default function Contact() {
  return (
    <SectionLayout title={CONTACT_TITLE} id={CONTACT.toLowerCase()}>
      <ContactText>{CONTACT_TEXT}</ContactText>
      <SocialIconsContainer>
        {SOCIALS.map((social, idx) => (
          <SocialIcon key={idx}>
            <IconContainer
              href={SOCIAL_DETAILS[social]["href"]}
              target="_blank"
            >
              <IconContext.Provider value={{ size: "40px" }}>
                {SOCIAL_DETAILS[social]["icon"]}
              </IconContext.Provider>
            </IconContainer>
          </SocialIcon>
        ))}
      </SocialIconsContainer>
    </SectionLayout>
  );
}
