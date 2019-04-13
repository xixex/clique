import React from 'react';
import styles from './MessageList.module.css';
import Message from './Message/Message';


class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToBottom() {
    const { scrollHeight } = this.messageList;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const messagesElements = this.props.messages.map(e => <Message sender={e.sender} text={e.text} />);
    return (
      <div
        className={styles.messages__list}
        ref={(div) => {
          this.messageList = div;
        }}
      >
        {messagesElements}
      </div>
    );
  }
}

export default MessageList;
