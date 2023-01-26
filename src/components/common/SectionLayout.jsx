import styled from "styled-components";

import { SectionTitle } from "@/components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  @media only screen and (min-width: 751px) {
    margin-top: 6rem;
  }
`;

export default function SectionLayout({ title, children }) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Section>
  );
}
