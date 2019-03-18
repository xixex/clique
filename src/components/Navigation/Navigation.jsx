import React from 'react';
import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__items}>
        <div className={styles.nav__item}><NavLink to="/posts" activeClassName={styles.activeLink}>Posts</NavLink></div>
        <div className={styles.nav__item}><NavLink to="/messages" activeClassName={styles.activeLink}>Messages</NavLink></div>
        <div className={styles.nav__item}><NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink></div>
        <div className={styles.nav__item}><NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink></div>
        <div className={styles.nav__item}><NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink></div>
      </div>
    </nav>
  );
}
export default Navigation;