import React from 'react';
import styles from './Dialog.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {

  return (

    <NavLink to={'/messages/'+props.id} activeClassName={styles.companion__active}>
      <div className={styles.companion}> {props.name}</div>
    </NavLink>

  );
};
export default Dialog;