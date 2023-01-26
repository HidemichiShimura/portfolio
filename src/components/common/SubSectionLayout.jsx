import styled from "styled-components";

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
    <Title>{title}</Title>
    {children}
  </SubSection>
);

export default SubSectionLayout;
