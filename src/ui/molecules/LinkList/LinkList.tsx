import { Icon } from "@/ui";

type LinkListTypes = {
  github?: string;
  link?: string;
  mail?: string;
  linkedin?: string;
};

export default function LinkList({
  github,
  link,
  mail,
  linkedin,
}: LinkListTypes) {
  return (
    <ul className="flex gap-2">
      {github && <Link icon="github" url={github} />}
      {link && <Link icon="link" url={link} />}
      {mail && <Link icon="mail" url={mail} />}
      {linkedin && <Link icon="linkedin" url={linkedin} />}
    </ul>
  );
}

function Link({
  icon,
  url,
}: {
  icon: "github" | "link" | "mail" | "linkedin";
  url: string;
}) {
  return (
    <li className="w-7">
      <a href={url} target="_blank">
        <Icon icon={icon} />
      </a>
    </li>
  );
}
