import styled from "styled-components";

import { MEDIA_TABLET, PROFILE_IMG_SRC, NAME } from "@/constants";

const Container = styled.div`
  font-size: 12px;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: var(--opacity);
    transition-duration: var(--transition-duration);
  }

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    font-size: 16px;
  }
`;

const ProfileImage = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-image: url(${PROFILE_IMG_SRC});
  background-position: center;
  background-size: cover;
  margin-right: 10px;
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
      <ProfileImage />
      <div>
        <strong>{NAME}</strong>
      </div>
    </Container>
  );
}
