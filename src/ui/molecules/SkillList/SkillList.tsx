import Icon from "../../atoms/Icon/Icon";
import type { Skills } from "@/types";

type SkillListTypes = { list: Skills[] };

export default function SkillList({ list }: SkillListTypes) {
  return (
    <ul className="flex w-4/5 min-w-80 max-w-2xl flex-wrap gap-2">
      {list.map((skill) => (
        <li className="min-w-8 max-w-20">
          <Icon icon={skill} />
        </li>
      ))}
    </ul>
  );
}
