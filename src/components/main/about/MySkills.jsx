import { SubSectionLayout, MySkillList } from "@/components";

import { MY_SKILLS_TITLE } from "@/constants";

export default function MySkills() {
  return (
    <SubSectionLayout title={MY_SKILLS_TITLE}>
      <MySkillList />
    </SubSectionLayout>
  );
}
