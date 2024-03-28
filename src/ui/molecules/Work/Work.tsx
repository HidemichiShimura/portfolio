import { Card, LinkList } from "@/ui";

type Project = "wt" | "cdc" | "scb";
type WorkTypes = { name: Project };

export default function Work({ name }: WorkTypes) {
  const cmnClass = "w-full h-96 bg-cover bg-center bg-no-repeat";
  let workName = "";
  let bgClass = "";

  switch (name) {
    case "wt":
      workName = "Weight Tracker";
      bgClass = "bg-wt";
      break;
    case "cdc":
      workName = "Cafe Drink Customizer";
      bgClass = "bg-cdc";
      break;
    case "scb":
      workName = "Slack Cocktail Bot";
      bgClass = "bg-scb";
      break;
    default:
      break;
  }

  return (
    <Card>
      <div className={`${cmnClass} ${bgClass}`}>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-slate-900 opacity-50">
          <p className="text-white">{workName}</p>
          <WorkLinkList name={name} />
        </div>
      </div>
    </Card>
  );
}

function WorkLinkList({ name }: WorkTypes) {
  switch (name) {
    case "wt":
      return (
        <LinkList
          github="https://github.com/HidemichiShimura/weight-tracker"
          link="https://weight-tracker-front.vercel.app/"
        />
      );
    case "cdc":
      return (
        <LinkList github="https://github.com/HidemichiShimura/cafe-drink-customizer" />
      );
    case "scb":
      return (
        <LinkList github="https://github.com/HidemichiShimura/slack-cocktail-bot" />
      );
    default:
  }
}
