import styled from "styled-components";

const Title = styled.h2`
  color: var(--accent-color);
`;

const SectionSubTitle = ({ children }) => <Title>{children}</Title>;

export default SectionSubTitle;
