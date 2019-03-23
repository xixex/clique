import styles from "./NewPost.module.css";
import React from "react";

const NewPost = (props) => {
  debugger;
  let textRef = React.createRef();
  let sendPost = () => {
    props.dispatch({type: 'ADD-POST', text: textRef.current.value});
  };

  let onPostChange = () => {

    let newText = textRef.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', text: newText};
    props.dispatch(action);
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
      <button className={styles.newPost__button} onClick={sendPost}>Post</button>
    </div>
  );
};

export default NewPost;

