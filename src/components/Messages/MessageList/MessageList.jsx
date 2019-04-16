import React, { useEffect } from 'react';
import styles from './MessageList.module.css';
import Message from './Message/Message';

const MessageList = (props) => {
  const ref = React.createRef();
  const messagesElements = props.messages.map(e => (
    <Message
      sender={e.sender}
      text={e.text}
    />
  ));
  useEffect(() => {
    const messageList = ref.current;
    const { scrollHeight } = messageList;
    const height = messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }, [props.messages]);

  return (
    <div
      className={styles.messages__list}
      ref={ref}
    >
      {messagesElements}
    </div>
  );
};

export default MessageList;
