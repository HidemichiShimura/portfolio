import styled from "styled-components";

import { SectionSubTitle } from "@/components";

const SubSection = styled.section`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  @media only screen and (min-width: 751px) {
    margin-top: 2rem;
  }
`;

const SubSectionLayout = ({ title, children }) => (
  <SubSection>
    <SectionSubTitle>{title}</SectionSubTitle>
    {children}
  </SubSection>
);

export default SubSectionLayout;
