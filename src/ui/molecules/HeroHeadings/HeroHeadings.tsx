import { PageHeading } from "@/ui";

export default function HeroHeadings() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <PageHeading>Hidemichi Shimura</PageHeading>
      </div>
      <div className="flex flex-col items-center">
        <PageHeading type="sub">Web Developer</PageHeading>
        <PageHeading type="sub">&</PageHeading>
        <PageHeading type="sub">Challenge Seeker</PageHeading>
      </div>
    </div>
  );
}
