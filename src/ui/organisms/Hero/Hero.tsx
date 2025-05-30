import { RadialLinearContainer, HeroHeadings } from "@/ui";

export default function Hero() {
  return (
    <div className="grow" data-testid="hero">
      <RadialLinearContainer>
        <div className="flex h-screen w-full items-center justify-center self-stretch">
          <HeroHeadings />
        </div>
      </RadialLinearContainer>
    </div>
  );
}
