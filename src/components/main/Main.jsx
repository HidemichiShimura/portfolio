import { Intro } from "../index";

import styled from "styled-components";

const MainSection = styled.main`
  width: 100%;
  padding: 0 40px;
  margin-top: 70px;

  @media only screen and (min-width: 751px) {
    padding: 0 10%;
  }
`;

const Main = () => {
  return (
    <MainSection>
      <Intro />
    </MainSection>
  );
};

export default Main;
