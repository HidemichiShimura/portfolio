import { SectionLayout, MyDescription, MySkills } from "@/components";

import { ABOUT_TITLE, ABOUT } from "@/constants";

export default function About() {
  return (
    <SectionLayout id={ABOUT.toLowerCase()} title={ABOUT_TITLE}>
      <MyDescription />
      <MySkills />
    </SectionLayout>
  );
}
