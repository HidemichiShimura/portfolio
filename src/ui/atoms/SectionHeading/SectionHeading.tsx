export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="bg-gradient-to-b from-neutral-100 to-black bg-clip-text font-sans text-4xl text-transparent">
      {children}
    </h2>
  );
}
