"use client";

import { useState } from "react";
import {
  Template,
  Hero,
  Intro,
  Skills,
  Works,
  Footer,
  ThemeToggle,
} from "@/ui";
import { Theme } from "@/types";
import { ThemeContext } from "@/contexts";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggle theme={theme} onClick={setTheme} />
      <Template
        hero={<Hero />}
        content={
          <>
            <Intro />
            <Skills />
            <Works />
          </>
        }
        footer={<Footer />}
      ></Template>
    </ThemeContext.Provider>
  );
}
