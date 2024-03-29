import { Skill } from "@/types";
import { GradientCard, SkillList, Typography } from "@/ui";

export default function SkillCard({
  heading,
  list,
}: {
  heading: string;
  list: Skill[];
}) {
  return (
    <GradientCard>
      <div className="flex min-h-full flex-col gap-2 p-2">
        <Typography>{heading}</Typography>
        <div className="flex items-center justify-center">
          <SkillList list={list} />
        </div>
      </div>
    </GradientCard>
  );
}
