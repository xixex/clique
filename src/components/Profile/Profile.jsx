import React from 'react';
import styles from './Profile.module.css'
import Posts from "./Posts/Posts";
import AboutMe from "./AboutMe/AboutMe";

const Profile = () => {
  return (
    <div className={styles.content}>
      <AboutMe/>
    </div>
  );
};
export default Profile;