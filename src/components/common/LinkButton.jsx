import Link from "next/link";

import styled from "styled-components";

import { MEDIA_TABLET } from "@/constants";

const Button = styled(Link)`
  width: 150px;
  display: inline-block;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  border-radius: 3px;
  text-align: center;
  padding: 10px 0;

  &:hover {
    color: var(--main-color);
    background-color: var(--accent-color);
    transition-duration: 1s;
  }

  @media only screen and (min-width: ${MEDIA_TABLET}) {
    width: 220px;
    font-size: 24px;
  }
`;

export default function LinkButton({ href, children }) {
  return <Button href={href}>{children}</Button>;
}
