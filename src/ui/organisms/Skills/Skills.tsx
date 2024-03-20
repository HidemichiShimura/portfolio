import type { Skill as SkillType } from "@/types/types";
import { SectionHeading, GradientCard, Typography, SkillList } from "@/ui";

export default function Skills() {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeading>SKILLS</SectionHeading>
      <Skill heading="Languages" list={["javascript", "typescript"]} />
      <Skill
        heading="Frontend"
        list={[
          "sass",
          "bootstrap",
          "tailwind",
          "react",
          "nextjs",
          "materialui",
          "redux",
          "jest",
          "storybook",
        ]}
      />
      <Skill
        heading="Backend"
        list={[
          "node",
          "express",
          "mongodb",
          "mongoose",
          "postgres",
          "prisma",
          "firebase",
        ]}
      />
      <Skill heading="Tools" list={["git", "github", "webpack", "figma"]} />
      <StayTune />
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
