import { useState } from "react";

import styles from "../../../styles/Header/BurgerMenu/ToggleBtn.module.css";

export default function ToggleBtn(props) {
    const {isOpen, onClick} = props;

    return (
        <div className={isOpen ? styles["open-toggle-btn"]  : styles["toggle-btn"]} onClick={onClick}>
            <span className={styles["burger-bar"]}></span>
            <span className={styles["burger-bar"]}></span>
            <span className={styles["burger-bar"]}></span>
        </div>
    )
}