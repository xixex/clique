import React from 'react';
import styles from './Profile.module.css'
import Posts from "./Posts/Posts";
import About from "./About/About";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <About person={props.person}/>
    </div>
  );
};
export default Profile;