import Image from "next/image";

import styled from "styled-components";

import { MEDIA_TABLET, PROFILE_IMG_SRC, NAME } from "@/constants";

const Container = styled.div`
  font-size: 12px;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  cursor: pointer;

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    font-size: 16px;
  }
`;

const StyledImage = styled(Image)`
  margin-right: 8px;
  border-radius: 50%;
`;

export default function HeaderLogo() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container onClick={scrollToTop}>
      <StyledImage
        width={40}
        height={40}
        src={PROFILE_IMG_SRC}
        alt={"Profile Picture"}
      />
      <div>
        <strong>{NAME}</strong>
      </div>
    </Container>
  );
}
