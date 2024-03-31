import { GradientCard, LinkList, Typography } from "@/ui";

export default function Footer() {
  return (
    <footer>
      <div className="flex h-20 w-full items-center justify-evenly md:h-40">
        <LinkList
          mail="mailto:hidemichi.shimura@gmail.com"
          linkedin="https://www.linkedin.com/in/hidemichi-shimura"
        />
        <Typography>&copy; {getFullYear()} Hidemimchi Shimura</Typography>
      </div>
    </footer>
  );
}

function getFullYear() {
  const date = new Date();

  return date.getFullYear();
}
