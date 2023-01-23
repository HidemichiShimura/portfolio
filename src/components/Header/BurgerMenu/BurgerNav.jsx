import { useState } from "react";

import styles from "@/styles/Header/BurgerMenu/BurgerNav.module.css";

import { INTRO, ABOUT, PROJECTS, CONTACT } from "@/constants";

export default function BurgerNav(props) {
  const { isOpen } = props;

  return (
    <nav className={isOpen ? styles["open-nav"] : styles["nav"]}>
      <div className={styles["inner"]}>
        <ul>
          <li>
            <a href="#intro">{INTRO}</a>
          </li>
          <li>
            <a href="#about">{ABOUT}</a>
          </li>
          <li>
            <a href="#projects">{PROJECTS}</a>
          </li>
          <li>
            <a href="#contact">{CONTACT}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
