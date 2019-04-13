import React from 'react';
import styles from './NewMessage.module.css';


const NewMessage = (props) => {
  const ref = React.createRef();

  const onSendButtonClick = () => {
    props.onSendButtonClick(props.newMessageText);
  };

  const onMessageUpdate = () => {
    const newText = ref.current.value;
    props.onMessageUpdate(newText);
  };

  return (
    <div className={styles.newMessage}>
      <div className={styles.newMessage__wrapper}>
        <input
          className={styles.newMessage__input}
          type="text"
          placeholder="Enter message.."
          autoFocus
          ref={ref}
          value={props.newMessageText}
          onChange={onMessageUpdate}
        />
        <button className={styles.newMessage__btn} onClick={onSendButtonClick}>SEND</button>
      </div>
    </div>
  );
};

export default NewMessage;
