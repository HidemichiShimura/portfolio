import { Typography } from "@/ui";

const TEXT =
  "I am a self-taught web developer with a strong background in modern frontend and backend skills with experiences as a system admin for servers and networks. I have a strong passion for problem-solving and am always eager to assist my team members. I thrive in fast-paced environments with new challenges. Mutual assistance is my top priority.";

export default function Intro() {
  return (
    <section className="flex h-screen items-center md:h-96">
      <Typography>{TEXT}</Typography>
    </section>
  );
}
