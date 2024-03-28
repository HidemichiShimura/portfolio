import type { Skill as SkillType } from "@/types/types";
import { SectionHeading, GradientCard, Typography, SkillList } from "@/ui";

const SKILL_LIST: {
  languages: SkillType[];
  frontend: SkillType[];
  backend: SkillType[];
  tools: SkillType[];
} = {
  languages: ["javascript", "typescript"],
  frontend: [
    "sass",
    "bootstrap",
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
      <div className="flex flex-col justify-center gap-4">
        <Skill heading="Languages" list={SKILL_LIST.languages} />
        <Skill heading="Frontend" list={SKILL_LIST.frontend} />
        <Skill heading="Backend" list={SKILL_LIST.backend} />
        <Skill heading="Tools" list={SKILL_LIST.tools} />
        <StayTune />
      </div>
    </section>
  );
}

function Skill({ heading, list }: { heading: string; list: SkillType[] }) {
  return (
    <GradientCard>
      <div className="flex flex-col gap-2 p-2">
        <Typography>{heading}</Typography>
        <SkillList list={list} />
      </div>
    </GradientCard>
  );
}

function StayTune() {
  return (
    <GradientCard>
      <div className="flex flex-col items-center justify-center gap-2 p-2">
        <Typography>Stay tuned...</Typography>
      </div>
    </GradientCard>
  );
}
