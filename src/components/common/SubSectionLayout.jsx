import styled from "styled-components";

import { SectionSubTitle } from "@/components";

const SubSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;

  @media only screen and (min-width: 751px) {
    margin-top: 32px;
  }
`;

export default function SubSectionLayout({ title, children }) {
  return (
    <SubSectionContainer>
      <SectionSubTitle>{title}</SectionSubTitle>
      {children}
    </SubSectionContainer>
  );
}
