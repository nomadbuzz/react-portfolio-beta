import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About =()=>{
    return (<section id="about" className={styles.container}>
        <h2 className={styles.title}>About</h2>

        <div className={styles.content}>
            <img className={styles.aboutImg} src={getImageUrl("about/aboutImg.png")} alt="me standing"
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}> 
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Image"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I am a frontend developer with experience in building responsive and 
                            optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}> 
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Image"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimized APIs
                        </p>
                    </div>
                </li>

            </ul>
           
        </div>
    </section>
    );    

}
