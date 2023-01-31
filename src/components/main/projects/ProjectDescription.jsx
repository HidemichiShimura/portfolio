import styled from "styled-components";

import { LinkButton } from "@/components";

import { MEDIA_TABLET } from "@/constants";

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0 0;

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    width: 60%;
    align-items: start;
    margin: 0 0 0 50px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: calc(16px + 1.5vw);
  margin-bottom: 30px;
`;

const Description = styled.p`
  letter-spacing: 1px;
  margin-bottom: 30px;
  @media only screen and (min-width: ${MEDIA_TABLET}) {
    font-size: 20px;
  }
`;

export default function ProjectDescription({
  title,
  description,
  linkText,
  url,
}) {
  return (
    <DescriptionContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <Description>{description}</Description>
      <LinkButton href={url}>{linkText}</LinkButton>
    </DescriptionContainer>
  );
}
