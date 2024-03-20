export type PageHeadingTypes = {
  type?: "main" | "sub";
  children: string;
};

export default function PageHeading({
  type = "main",
  children,
}: PageHeadingTypes) {
  const commonClassName = "font-60s-stripe text-neutral-100";

  if (type === "main") {
    return (
      <h1 className={`${commonClassName} text-6xl md:text-8xl`}>{children}</h1>
    );
  }
  return (
    <h2 className={`${commonClassName} text-2xl md:text-4xl`}>{children}</h2>
  );
}
