import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutImageBlur}></div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/icons/lcurseurIcon.png")} alt="Cursor icon" className="aboutIcon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have gained experience in creating responsive and optimized websites to deliver exceptional user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/icons/serverIcon.png")} alt="Server icon" className="aboutIcon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have experience in creating optimized backend systems, as well as developing robust APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/icons/uiIcon.png")} alt="UI icon" className="aboutIcon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I have had the opportunity to create wireframes and interactive prototypes for my projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};