import type { Skill as SkillType } from "@/types/types";
import {
  SectionHeading,
  GradientCard,
  Typography,
  SkillList,
  SkillCard,
} from "@/ui";

const SKILL_LIST: {
  languages: SkillType[];
  frontend: SkillType[];
  backend: SkillType[];
  tools: SkillType[];
} = {
  languages: ["javascript", "typescript"],
  frontend: [
    "sass",
    "tailwind",
    "react",
    "nextjs",
    "materialui",
    "redux",
    "jest",
    "storybook",
  ],
  backend: ["node", "express", "mongodb", "postgres", "prisma", "firebase"],
  tools: ["git", "github", "webpack", "figma"],
};

export default function Skills() {
  return (
    <section className="flex min-h-screen flex-col justify-center gap-8">
      <SectionHeading>SKILLS</SectionHeading>
      <div className="grid grid-cols-1 grid-rows-5 gap-4 md:grid-cols-6 md:grid-rows-3">
        <div className="col-span-1 row-span-1 h-full md:col-span-2 md:row-span-2">
          <GradientCard>
            <div className="flex min-h-full flex-col gap-2 p-2">
              <Typography>Languages</Typography>
              <div className="flex items-center justify-center md:h-36">
                <SkillList list={SKILL_LIST.languages} />
              </div>
            </div>
          </GradientCard>
        </div>
        <div className="col-span-1 row-span-1 md:col-span-4 md:row-span-1">
          <SkillCard heading="Frontend" list={SKILL_LIST.frontend} />
        </div>
        <div className="col-span-1 row-span-1 md:col-span-4 md:row-span-1">
          <SkillCard heading="Backend" list={SKILL_LIST.backend} />
        </div>
        <div className="col-span-1 row-span-1 md:col-span-4 md:row-span-1">
          <SkillCard heading="Tools" list={SKILL_LIST.tools} />
        </div>
        <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-1">
          <GradientCard>
            <div className="flex h-20 items-center justify-center">
              <Typography>Stay tuned...</Typography>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  );
}
