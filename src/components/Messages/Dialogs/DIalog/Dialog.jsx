import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.css';


const Dialog = props => (

  <NavLink to={`/messages/${props.id}`} activeClassName={styles.companion__active}>
    <div className={styles.companion}>
      {' '}
      {props.name}
    </div>
  </NavLink>

);
export default Dialog;
