import React from 'react';
import styles from './NewPost.module.css';

const NewPost = (props) => {
  const textRef = React.createRef();
  const { newPostText } = props.postsPage;
  const onSendPostClick = () => {
    props.onSendPostClick(newPostText);
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
        maxLength={300}
        ref={textRef}
        value={newPostText}
        onChange={onPostChange}
      />
      <button type="submit" className={styles.newPost__button} onClick={onSendPostClick}>Post</button>
    </div>
  );
};

export default NewPost;
