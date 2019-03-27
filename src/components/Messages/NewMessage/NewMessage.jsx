import React from 'react';
import styles from './NewMessage.module.css';

import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator
} from '../../../redux/messagesPageReducer'


const NewMessage = (props) => {

  const ref = React.createRef();

  const onSendButtonClick = () => {
    props.dispatch(sendMessageActionCreator(props.newMessageText))
  };

  const onMessageUpdate = () => {
    let newText = ref.current.value;
    props.dispatch(updateNewMessageTextActionCreator(newText))
  };

  return (
    <div className={styles.newMessage}>
      <div className={styles.newMessage__wrapper}>
      <input className={styles.newMessage__input} type="text" placeholder="Enter message.."
             autoFocus ref={ref} value={props.newMessageText} onChange={onMessageUpdate}/>
      <button className={styles.newMessage__btn} onClick={onSendButtonClick}>SEND</button>
      </div>
    </div>
  );
};

export default NewMessage;