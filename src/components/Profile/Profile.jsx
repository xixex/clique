import React from 'react';
import styles from './Profile.module.css'


const Profile = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}/>
      <div className={styles.avatar} >
        <img className={styles.avatar__img} alt="avatar" src="https://mkset.ru/attachments/3496dda5863ea83fccf189405ec43ae1191f9aa8/store/fill/780/440/54f21f346d18221ade086096e676cb39515d2f6a173caf5f3320a7a736d2/_103292550_img_6897o-976.jpg"/>
      </div>
      <div className={styles.info}>
        <h1>{props.person.name}</h1>
        <h4>{props.person.country}</h4>
      </div>
    </div>
  );
};
export default Profile;