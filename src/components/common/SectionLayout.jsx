import styled from "styled-components";

import { SectionTitle } from "@/components";

import { MEDIA_TABLET } from "@/constants";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    margin-top: 96px;
  }
`;

export default function SectionLayout({ id, title, children }) {
  return (
    <Section id={id}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Section>
  );
}
