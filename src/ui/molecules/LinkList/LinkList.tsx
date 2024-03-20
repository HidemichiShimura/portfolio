import { Icon } from "@/ui";

type LinkListTypes = {
  github: string;
  link?: string;
};

export default function LinkList({ github, link }: LinkListTypes) {
  return (
    <ul className="flex gap-2">
      <li className="w-7">
        <a href={github} target="_blank">
          <Icon icon="github" />
        </a>
      </li>
      {link && (
        <li className="w-7">
          <a href={link} target="_blank">
            <Icon icon="link" />
          </a>
        </li>
      )}
    </ul>
  );
}
