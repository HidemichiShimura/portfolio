import styled from "styled-components";

const Title = styled.h1`
  font-size: calc(32px + 1.5vw);
  color: var(--accent-color);
  margin-bottom: 30px;
`;

export default function SectionTitle({ children }) {
  return <Title>{children}</Title>;
}
