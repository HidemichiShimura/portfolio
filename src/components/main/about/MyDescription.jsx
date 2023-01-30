import styled from "styled-components";

import { SubSectionLayout } from "@/components";

import { MEDIA_TABLET } from "@/constants";

import {
  MY_DESCRIPTION_TITLE,
  SELF_INTRODUCTION,
  CONTACT_ME_TEXT,
} from "@/constants";

const MyDescriptionContainer = styled.div`
  line-height: 1.5;
  letter-spacing: 1px;
`;

const DescriptionText = styled.p`
  @media only screen and (min-width: ${MEDIA_TABLET}) {
    font-size: 24px;
  }
`;

export default function MyDescription() {
  return (
    <MyDescriptionContainer>
      <SubSectionLayout title={MY_DESCRIPTION_TITLE}>
        <DescriptionText>{SELF_INTRODUCTION}</DescriptionText>
        <br />
        <DescriptionText>{CONTACT_ME_TEXT}</DescriptionText>
      </SubSectionLayout>
    </MyDescriptionContainer>
  );
}
