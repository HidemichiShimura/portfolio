import styles from "../../styles/Header/HeaderLogo.module.css";

import { PROFILE_IMG_SRC } from "../../constants/index";

export default function HeaderLogo() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles["container"]} onClick={scrollToTop}>
      <img
        className={styles["profile-img"]}
        src={PROFILE_IMG_SRC}
        alt={"Profile Picture"}
      />

      <div>
        <strong>Hidemichi Shimura</strong>
      </div>
    </div>
  );
}
