import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  @media only screen and (min-width: 751px) {
    margin-top: 6rem;
  }
`;

const Title = styled.h1`
  font-size: calc(32px + 1.5vw);
  color: var(--accent-color);
  margin-bottom: 30px;
`;

const SectionLayout = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

export default SectionLayout;
