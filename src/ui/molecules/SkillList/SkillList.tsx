import { Icon } from "@/ui";
import type { Skill } from "@/types";

type SkillListTypes = { list: Skill[] };

export default function SkillList({ list }: SkillListTypes) {
  return (
    <ul className="flex w-4/5 items-center justify-center gap-2 ">
      {list.map((skill) => {
        const isLanguage = ["javascript", "typescript"].includes(skill);
        const className = isLanguage ? "min-w-8 md:w-16" : "min-w-8";

        return (
          <li className={className} key={skill}>
            <Icon icon={skill} />
          </li>
        );
      })}
    </ul>
  );
}
