import React from 'react';
import styles from './Header.module.css'
  const Header = ()=>{
  return (
    <header className={styles.header}>
      <img className={styles.header__img}
           src="https://i.ibb.co/8gSvcc6/Untitled-1.png"
           alt=""/>
      <input type="text" className={styles.header__search}/>

    </header>
  );
};
export default Header;