import React from 'react';
import styles from "./MessageList.module.css";
import Message from "./Message/Message";

let messages = [
  {sender: {name: "Максим"}, text: "Hello :)"},
  {sender: {name: "Максим"}, text: "How are you "},
  {text: "Hello hello"}
];

let messagesElements = messages.map(e => <Message sender={e.sender} text={e.text}/>);
const MessageList = () => {
  return (
    <div className={styles.messages__list}>
      {messagesElements}
    </div>
  );
};
export default MessageList;