import styled from "styled-components";

import { PROFILE_IMG_SRC, INTRO_HEADING, INTRO_DESCRIPTION } from "../../../constants/index";

const IntroSection = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: 70px;
    display: flex;
    align-items: center;
`;

const IntroWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

const IntroHeading = styled.h1`
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 2rem;

    @media only screen and (min-width: 751px) {
        font-size: 2.5rem;
    }
`;

const IntroImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 1px var(--accent-color);

    @media only screen and (min-width: 751px) {
        width: 250px;
        height: 250px;
        border-radius: 50%;
    }
`;

const IntroDescription = styled.p`
    text-align: center;
    margin-top: 2rem;

    @media only screen and (min-width: 751px) {
        font-size: 1.2rem;
    }
`;

const Intro = () => {
    return (
        <IntroSection id="intro">
            <IntroWrapper>
                <IntroHeading>{INTRO_HEADING}</IntroHeading>
                <IntroImg src={PROFILE_IMG_SRC} />
                <IntroDescription>{INTRO_DESCRIPTION}</IntroDescription>
            </IntroWrapper>
        </IntroSection>
    )
}

export default Intro;