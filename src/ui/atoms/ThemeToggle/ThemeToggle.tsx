import type { Theme } from "@/types";
import { type Dispatch, type SetStateAction } from "react";
import moon from "../../../../public/images/icons/moon.svg";
import sun from "../../../../public/images/icons/sun.svg";

export default function ThemeToggle({
  theme,
  onClick,
}: {
  theme: Theme;
  onClick: Dispatch<SetStateAction<Theme>>;
}) {
  return (
    <button
      className="fixed right-4 top-4 z-10 rounded-3xl border-2 border-light-gray px-2"
      onClick={() => {
        if (theme === "dark") {
          return onClick("light");
        }
        return onClick("dark");
      }}
    >
      <div className="relative flex h-12 w-24 items-center justify-center gap-4">
        <div className="w-8 invert-half">
          <img src={moon.src} />
        </div>
        {theme === "dark" ? (
          <div className="absolute right-0 z-10 h-12 w-12 rounded-full bg-light-gray" />
        ) : (
          <div className="absolute left-0 z-10 h-12 w-12 rounded-full bg-light-gray" />
        )}
        <div className="w-10 invert-half">
          <img src={sun.src} />
        </div>
      </div>
    </button>
  );
}
