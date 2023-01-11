import styles from "../../styles/Header/HeaderLogo.module.css";

export default function HeaderLogo() {
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className={styles["container"]} onClick={scrollToTop}>
                <img 
                    className={styles["profile-img"]}
                    src={"/assets/profile-img.jpg"}
                    alt={"Profile Picture"}
                />
                    
                <div><strong>Hidemichi Shimura</strong></div>
        </div>
    )
}