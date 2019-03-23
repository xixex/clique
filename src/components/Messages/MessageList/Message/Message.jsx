import React from 'react';
import styles from './Message.module.css'


const Message = (props) => {
  return (

    <div className={`${styles.message}  ${props.sender ? styles.from : styles.to}`}>
      <div className={styles.message__name}>{props.sender? props.sender.name: 'Me'}</div>
      <div className={styles.message__text}>
        {props.text}
      </div>
      <div className={styles.message__time}>
        14:47
      </div>
    </div>
  );
};
export default Message;