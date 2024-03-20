import { GradientCard, LinkList, Typography } from "@/ui";

export default function Footer() {
  return (
    <section>
      <GradientCard>
        <div className="flex h-20 w-screen items-center justify-evenly md:h-40">
          <LinkList
            mail="mailto:hidemichi.shimura@gmail.com"
            linkedin="https://github.com/HidemichiShimura"
          />
          <Typography>&copy; {getFullYear()} Hidemimchi Shimura</Typography>
        </div>
      </GradientCard>
    </section>
  );
}

function getFullYear() {
  const date = new Date();

  return date.getFullYear();
}
