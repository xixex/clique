import React from 'react';
import styles from './NewPost.module.css';

const NewPost = (props) => {
  const textRef = React.createRef();

  const onSendPostClick = () => {
    props.onSendPostClick();
  };

  const onPostChange = () => {
    const newText = textRef.current.value;
    props.onPostChange(newText);
  };

  return (
    <div className={styles.newPost}>
      <textarea
        placeholder="What's up?"
        className={styles.newPost__input}
        autoFocus
        maxLength={300}
        ref={textRef}
        value={props.newPostText}
        onChange={onPostChange}
      />
      <button className={styles.newPost__button} onClick={onSendPostClick}>Post</button>
    </div>
  );
};

export default NewPost;
