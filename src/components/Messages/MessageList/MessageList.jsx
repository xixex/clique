import React from 'react';
import styles from "./MessageList.module.css";
import Message from "./Message/Message";


const MessageList = (props) => {
  let messagesElements = props.messages.map(e => <Message sender={e.sender} text={e.text}/>);

  return (
    <div className={styles.messages__list}>
      {messagesElements}
    </div>
  );
};
export default MessageList;