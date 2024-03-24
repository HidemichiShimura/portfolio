import { Template, Hero, Intro, Skills, Works, Footer } from "@/ui";

export default function Home() {
  return (
    <Template
      hero={<Hero />}
      content={
        <>
          <Intro />
          <Skills />
          <Works />
          <Footer />
        </>
      }
    ></Template>
  );
}
