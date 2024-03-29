export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="bg-gradient-to-b from-black to-neutral-100 bg-clip-text font-sans text-4xl text-transparent dark:from-neutral-100 dark:to-black">
      {children}
    </h2>
  );
}
