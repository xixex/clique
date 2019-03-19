import styles from "./About.module.css";
import React from "react";


const About = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.info}>
        <h1>{props.person.name}</h1>
        <h4>{props.person.country}</h4>
      </div>
    </div>


  );
}
export default About;