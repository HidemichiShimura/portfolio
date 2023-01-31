import styled from "styled-components";

import { Intro, About, Projects } from "../index";

import { MEDIA_TABLET } from "@/constants";

const MainSection = styled.main`
  width: 100%;
  padding: 0 40px;
  margin-top: 70px;

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    padding: 0 10%;
  }
`;

const Main = () => {
  return (
    <MainSection>
      <Intro />
      <About />
      <Projects />
    </MainSection>
  );
};

export default Main;
