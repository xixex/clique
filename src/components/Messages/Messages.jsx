import React from 'react';
import styles from './Messages.module.css'
import MessageList from "./MessageList/MessageList";
import Dialogs from "./Dialogs/Dialogs";
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import NewMessage from "./NewMessage/NewMessage";

const Messages = (props) => {
  console.log(props);
  return (
    <div className={styles.messages}>
      <MessagesHeader/>
      <div className={styles.messages__content}>
        <Dialogs/>
        <MessageList messages={props.messages}/>
      </div>
      <NewMessage newMessageText = {props.newMessageText} dispatch={props.dispatch}/>
    </div>
  );
};

export default Messages;