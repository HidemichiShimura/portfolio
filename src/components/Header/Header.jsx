import styles from "../../styles/Header/Header.module.css";

import { HeaderLogo } from "../index";

export default function Header() {
    return (
        <header className={styles["header"]}>
            <div className={styles["container"]}>
                <HeaderLogo />
            </div>
        </header>
    )
}