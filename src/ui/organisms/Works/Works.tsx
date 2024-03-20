import { Card, SectionHeading } from "@/ui";
import weightTracker from "../../../../public/images/works/weight-tracker.gif";
import cafeDrinkCustomizer from "../../../../public/images/works/cafe-drink-customizer.gif";
import slackCocktailBot from "../../../../public/images/works/cocktail-bot.gif";

export default function Works() {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeading>WORKS</SectionHeading>
      <Card>
        <img src={weightTracker.src} />
      </Card>
      <Card>
        <img src={cafeDrinkCustomizer.src} />
      </Card>
      <Card>
        <img src={slackCocktailBot.src} />
      </Card>
    </section>
  );
}
