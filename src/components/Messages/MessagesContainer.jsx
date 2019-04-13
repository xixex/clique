import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/messagesPageReducer';
import Messages from './Messages';


const MessagesContainer = (props) => {
  const onSendButtonClick = () => {
    props.store.dispatch(sendMessageActionCreator(props.store.getState().messagesPage.newMessageText));
  };

  const onMessageUpdate = (newText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(newText));
  };

  return (
    <Messages
      onSendButtonClick={onSendButtonClick}
      onMessageUpdate={onMessageUpdate}
      messagesPage={props.store.getState().messagesPage}
    />
  );
};

export default MessagesContainer;
