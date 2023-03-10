import styled from "styled-components";

import {
  MEDIA_TABLET,
  PROFILE_IMG_SRC,
  INTRO_HEADING,
  INTRO_DESCRIPTION,
} from "@/constants";

const IntroSection = styled.section`
  width: 100%;
  height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
`;

const IntroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroHeading = styled.h1`
  font-size: 1.5rem;
  color: var(--accent-color);

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

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    font-size: 2.5rem;
  }
`;

const IntroImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px var(--accent-color);
  background-image: url(${PROFILE_IMG_SRC});
  background-position: center;
  background-size: cover;
  margin-top: 30px;

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    margin-top: 50px;
  }
`;

const IntroDescription = styled.p`
  text-align: center;
  margin-top: 30px;

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    font-size: 1.2rem;
    margin-top: 50px;
  }
`;

const Intro = () => {
  return (
    <IntroSection id="intro">
      <IntroWrapper>
        <IntroHeading>{INTRO_HEADING}</IntroHeading>
        <IntroImg />
        <IntroDescription>{INTRO_DESCRIPTION}</IntroDescription>
      </IntroWrapper>
    </IntroSection>
  );
};

export default Intro;
