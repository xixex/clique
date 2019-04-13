import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <img
      className={styles.header__img}
      src="https://i.ibb.co/8gSvcc6/Untitled-1.png"
      alt=""
    />
    <input type="text" className={styles.header__search} />
    <div className={styles.header__buttons}>
      <button className={`${styles.header__btn} ${styles.header__btn_light}`}>Sign In</button>
      <button className={`${styles.header__btn} ${styles.header__btn_gray}`}>Sign Up</button>
    </div>

  </header>
);
export default Header;
