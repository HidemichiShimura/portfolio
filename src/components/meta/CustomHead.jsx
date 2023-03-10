import Head from "next/head";

import { META_DATA } from "@/constants";

export default function CustomHead() {
  return (
    <Head>
      {Object.keys(META_DATA).map((data, idx) =>
        data === "charset" ? (
          <meta charSet={META_DATA["charset"]} key={idx} />
        ) : data === "title" ? (
          <title key={idx}>{META_DATA["title"]}</title>
        ) : (
          <meta name={data} content={META_DATA[data]} key={idx} />
        )
      )}
    </Head>
  );
}
