import styled from "styled-components";

const Title = styled.h1`
  font-size: calc(32px + 1.5vw);
  color: var(--accent-color);
  margin-bottom: 30px;

  // Linear gradient animation
  background-image: linear-gradient(
    90deg,
    var(--main-color) 0%,
    var(--accent-color) 40%,
    var(--main-color) 80%
  );
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 3s ease-in-out infinite;
  display: inline-block;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

export default function SectionTitle({ children }) {
  return <Title>{children}</Title>;
}
