import React from 'react';
import styles from './Messages.module.css'
import MessageList from "./MessageList/MessageList";
import Dialogs from "./Dialogs/Dialogs";
import MessagesHeader from "./MessagesHeader/MessagesHeader";

const Messages = (props) => {
  return (
    <div className={styles.messages}>
      <MessagesHeader/>
      <div className={styles.messages__content}>
        <Dialogs/>
        <MessageList messages={props.messages}/>
      </div>
    </div>
  );
};

export default Messages;