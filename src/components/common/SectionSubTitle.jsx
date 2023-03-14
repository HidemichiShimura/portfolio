import styled from "styled-components";

const Title = styled.h3`
  font-size: calc(1rem + 1.5vw);
  color: var(--accent-color);
  margin-bottom: 30px;

  // Linear gradient animation
  background-image: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--text-color) 40%,
    var(--accent-color) 80%
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

  border: 3px solid border-image: radial-gradient(rgb(0,143,104), rgb(250,224,66));
  }
`;

export default function SectionSubTitle({ children }) {
  return <Title>{children}</Title>;
}
