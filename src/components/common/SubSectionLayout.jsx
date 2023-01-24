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

const Title = styled.h3`
  font-size: calc(1rem + 1.5vw);
  color: var(--accent-color);
  margin-bottom: 30px;
`;

const SubSectionLayout = ({ title, children }) => (
  <SubSection>
    <Title>{title}</Title>
    {children}
  </SubSection>
);

export default SubSectionLayout;
