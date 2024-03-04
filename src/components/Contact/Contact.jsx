import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Contact.module.css';

export const Contact = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.content}>
        <div className={styles.text}>
           <h2>Contact</h2>
           <p>Feel free to reach out!</p> 
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="bouizemdjihane1312@gmail.com">
                    <img src= {getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                </a>
            </li>
            <li className={styles.link}>
                <a href="https://www.linkedin.com/in/djihane-bouizem-4b1143273/">
                    <img src= {getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                </a>
            </li>
            <li className={styles.link}>
                <a href="https://github.com/DjihaneB312@gmail.com">
                    <img src= {getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                </a>
            </li>
        </ul>
        </div>
        <span className={styles.copywrite}>
        Copyright © {year} Djihane Bouizem. All rights reserved.
        </span>
      
    </footer>
  );
};
