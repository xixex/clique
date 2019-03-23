import styles from "./NewPost.module.css";
import React from "react";

const NewPost = (props) => {
  let textRef = React.createRef();
  let sendPost = ()=>{
    props.dispatch({type: 'ADD-POST', text: textRef.current.value});
  };

  return (
    <div className={styles.newPost}>
      <textarea placeholder="What's up?" className={styles.newPost__input} autoFocus maxLength={300} ref={textRef}/>
      <button className={styles.newPost__button} onClick={sendPost} >Post</button>
    </div>
  );
};

export default NewPost;

