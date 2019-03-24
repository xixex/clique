import React from 'react';
import styles from './NewMessage.module.css';

import {updateNewMessageTextActionCreator} from '../../../state'
import {sendMessageActionCreator} from '../../../state'


const NewMessage = (props) => {

  const ref = React.createRef();

  const onSendButtonClick = () => {
    props.dispatch(sendMessageActionCreator(props.newMessageText))
  };

  const onMessageUpdate = () => {

    props.dispatch(updateNewMessageTextActionCreator(ref.current.value))
  };

  return (
    <div className={styles.newMessage}>
      <input className={styles.newMessage__input} type="text" placeholder="Enter message.."
             autoFocus ref={ref} value={props.newMessageText} onChange={onMessageUpdate}/>
      <button className={styles.newMessage__btn} onClick={onSendButtonClick}>SEND</button>
    </div>
  );
};

export default NewMessage;