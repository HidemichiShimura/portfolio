import styled from "styled-components";

import {
  SectionLayout,
  ProjectThumbnail,
  ProjectDescription,
} from "@/components";

import {
  MEDIA_TABLET,
  PROJECTS,
  PROJECTS_TITLE,
  PROJECT_LIST,
  PROJECT_DETAILS,
} from "@/constants";

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export default function Projects() {
  return (
    <SectionLayout title={PROJECTS_TITLE} id={PROJECTS.toLowerCase()}>
      {PROJECT_LIST.map((project, idx) => (
        <ProjectContainer key={idx}>
          <ProjectThumbnail
            src={PROJECT_DETAILS[project]["src"]}
            alt={PROJECT_DETAILS[project]["alt"]}
          />
          <ProjectDescription
            title={PROJECT_DETAILS[project]["name"]}
            description={PROJECT_DETAILS[project]["description"]}
            linkText="GitHub"
            url={PROJECT_DETAILS[project]["url"]}
          />
        </ProjectContainer>
      ))}
    </SectionLayout>
  );
}
