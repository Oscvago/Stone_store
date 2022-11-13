import React from "react";
import styles from "./style.module.css";

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return(
        <div className={styles.main_container} >
            <nav className={styles.navbar} >
                <h1> Stone Store </h1>
                <button className={styles.white_btn} onClick={handleLogout} > Salir </button>
            </nav>
        </div>
    )
};

export default Main;