import Image from "next/image";

import styled from "styled-components";

import { MEDIA_LAPTOP } from "@/constants";

const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
  position: relative;

  @media only screen and (min-width: ${MEDIA_LAPTOP}) {
    width: 400px;
    height: 300px;
  }
`;

export default function ProjectThumbnail({ src, alt }) {
  return (
    <ImageContainer>
      <Image src={src} fill alt={alt}></Image>
    </ImageContainer>
  );
}
