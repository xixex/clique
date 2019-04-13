import React from 'react';
import styles from './Addressee.module.css';

const Addressee = props => (
  <div className={styles.messages__to}>
    <img
      src={props.img}
      alt=""
      className={styles.messages__img}
    />
    <div className={styles.messages__name}>{props.name}</div>
  </div>
);

export default Addressee;
