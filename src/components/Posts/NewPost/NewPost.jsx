import styles from "./NewPost.module.css";
import React from "react";
import {updateNewPostTextActionCreator, addPostTextActionCreator} from "../../../redux/postsPageReducer";

const NewPost = (props) => {

  let textRef = React.createRef();

  let onSendPostClick = () => {
    props.dispatch(addPostTextActionCreator(props.newPostText));
  };

  let onPostChange = () => {
    let newText = textRef.current.value;
    props.dispatch(updateNewPostTextActionCreator(newText));
  };

  return (
    <div className={styles.newPost}>
      <textarea placeholder="What's up?"
                className={styles.newPost__input}
                autoFocus
                maxLength={300}
                ref={textRef}
                value={props.newPostText}
                onChange={onPostChange}/>
      <button className={styles.newPost__button} onClick={onSendPostClick}>Post</button>
    </div>
  );
};

export default NewPost;

