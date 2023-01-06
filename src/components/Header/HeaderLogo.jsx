import styles from "../../styles/Header/HeaderLogo.module.css";

export default function HeaderLogo() {
    return (
        <div className={styles["container"]}>
            <img 
                className={styles["profile"]}
                src={"/assets/sample.jpg"}
                alt={"Profile Picture"}
            />
                
            <div><strong>Hidemichi Shimura</strong></div>
        </div>
    )
}