import Image from "next/image";

import styled from "styled-components";

import { PROFILE_IMG_SRC } from "@/constants";

const Container = styled.div`
  font-size: 1rem;
  color: var(--accent-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 750px) {
    font-size: 12px;
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
        <strong>Hidemichi Shimura</strong>
      </div>
    </Container>
  );
}
