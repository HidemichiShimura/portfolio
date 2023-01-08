import styles from "../../styles/Header/HeaderLogo.module.css";

export default function HeaderLogo() {
    return (
        <div className={styles["container"]}>
            <img 
                className={styles["profile-img"]}
                src={"/assets/profile-img.jpg"}
                alt={"Profile Picture"}
            />
                
            <div><strong>Hidemichi Shimura</strong></div>
        </div>
    )
}