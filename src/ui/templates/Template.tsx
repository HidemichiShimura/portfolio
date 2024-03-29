"use client";

import { useContext } from "react";
import { Grid } from "@/ui";
import { ThemeContext } from "@/contexts";

export default function Template({
  hero,
  content,
  footer,
}: {
  hero: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}) {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <main className={theme === "dark" ? "bg-black" : "bg-neutral-100"}>
        <div className="flex justify-center">{hero}</div>
        <Grid>
          <div className="px-4 pb-44 md:px-20">{content}</div>
        </Grid>
        {footer}
      </main>
    </div>
  );
}
