import { CustomHead, GlobalStyle } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomHead />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
