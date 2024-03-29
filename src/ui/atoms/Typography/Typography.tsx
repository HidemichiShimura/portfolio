type TypographyTypes = {
  color?: "gray" | "white";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
};

export default function Typography({
  color = "gray",
  size = "md",
  children,
}: TypographyTypes) {
  const textColor = color === "gray" ? "text-light-gray" : "text-neutral-100";
  let fontSize = "text-base";

  if (size === "xs") {
    fontSize = "text-xs";
  } else if (size === "sm") {
    fontSize = "text-sm";
  } else if (size === "lg") {
    fontSize = "text-lg";
  } else if (size === "xl") {
    fontSize = "text-xl";
  }

  return <p className={`${textColor} ${fontSize} font-sans`}>{children}</p>;
}
