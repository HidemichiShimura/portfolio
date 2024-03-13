export type PageHeadingTypes = {
  type?: "main" | "sub";
  children: string;
};

export default function PageHeading({
  type = "main",
  children,
}: PageHeadingTypes) {
  if (type === "main") {
    return <h1 className="font-60s-stripe text-8xl">{children}</h1>;
  }
  return <h2 className="font-60s-stripe text-4xl">{children}</h2>;
}
