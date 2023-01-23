import { useState } from "react";

import { BurgerNav, ToggleBtn } from "@/components";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <ToggleBtn isOpen={isOpen} onClick={handleClick} />
      <BurgerNav isOpen={isOpen} />
    </>
  );
}
