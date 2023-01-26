import styled from "styled-components";

const Title = styled.h3`
  font-size: calc(1rem + 1.5vw);
  color: var(--accent-color);
  margin-bottom: 30px;
`;

export default function SectionSubTitle({ children }) {
  return <Title>{children}</Title>;
}
