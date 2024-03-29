import { Icon } from "@/ui";
import type { Skill } from "@/types";

type SkillListTypes = { list: Skill[] };

export default function SkillList({ list }: SkillListTypes) {
  return (
    <ul className="flex w-4/5 items-center justify-center gap-2 ">
      {list.map((skill) => (
        <li className="min-w-8 max-w-20" key={skill}>
          <Icon icon={skill} />
        </li>
      ))}
    </ul>
  );
}
