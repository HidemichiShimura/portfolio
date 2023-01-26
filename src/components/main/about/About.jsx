import { SectionLayout, MyDescription } from "@/components";

import { ABOUT_TITLE } from "@/constants";

export default function About() {
  return (
    <SectionLayout title={ABOUT_TITLE}>
      <MyDescription />
    </SectionLayout>
  );
}
