import React from 'react';
import styles from './Profile.module.css'


const Profile = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h1>{props.person.name}</h1>
          <h4>{props.person.country}</h4>
        </div>
      </div>
    </div>
  );
};
export default Profile;