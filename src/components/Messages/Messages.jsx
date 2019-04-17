import React from 'react';

import styles from './Messages.module.css';
import MessageList from './MessageList/MessageList';
import Dialogs from './Dialogs/Dialogs';
import MessagesHeader from './MessagesHeader/MessagesHeader';
import NewMessage from './NewMessage/NewMessage';

const Messages = (props) => {
  const { messages, newMessageText } = props.messagesPage;

  return (
    <div className={styles.messages}>
      <MessagesHeader />
      <div className={styles.messages__content}>
        <Dialogs />
        <MessageList messages={messages} />
      </div>
      <NewMessage
        newMessageText={newMessageText}
        onSendButtonClick={props.onSendButtonClick}
        onMessageUpdate={props.onMessageUpdate}
      />
    </div>
  );
};

export default Messages;
