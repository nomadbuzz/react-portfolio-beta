import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () =>{
    return (<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I am Buzz</h1>
            <p className={styles.description}>I am a full-stack developer with 1 year of experience using React and NodeJs.
                 Reach out if you'd like to learn more!</p>
            <a className={styles.contactBtn} href="mailto:baz.coding@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/usr.png")} alt="Profile image of me"/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    );
}