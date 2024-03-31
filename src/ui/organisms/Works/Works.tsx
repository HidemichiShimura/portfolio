import { SectionHeading, Work } from "@/ui";

export default function Works() {
  return (
    <section className="flex min-h-screen flex-col justify-center gap-8">
      <SectionHeading>WORKS</SectionHeading>
      <div className="flex flex-col justify-center gap-4">
        <Work name="pf" />
        <Work name="wt" />
        <Work name="cdc" />
        <Work name="scb" />
      </div>
    </section>
  );
}
