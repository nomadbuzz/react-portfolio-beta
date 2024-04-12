import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () =>{
    return (<footer id="contact" className={styles.container}>
        <div className={styles.content}>
        <div className={styles.text}>
            <h2 className={styles.title}>
                Contact
            </h2 >
            <p className={styles.description}>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email Icon" />
                <a href="mailto:baz.coding@gmail.com">baz.coding@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin Icon" />
                <a href="https://www.linkedin.com/in/buzz-coding/">linkedin.com/in/buzz-coding</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github Icon" />
                <a href="https://github.com/nomadbuzz">github.com/nomadbuzz</a>
            </li>

        </ul>
        </div>
    </footer>);
    
}