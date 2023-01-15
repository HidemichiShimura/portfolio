import styled from "styled-components";

const SectionText = styled.h1`
    color: var(--accent-color);
`;

const SectionTitle = ({title}) => {
    return (
        <SectionText>{title}</SectionText>
    )
};

export default SectionTitle;