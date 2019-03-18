import styles from "./NewPost.module.css";
import React from "react";

const Posts = () => {
  return (
    <div className={styles.newPost}>
      <textarea placeholder="What's up?" className={styles.newPost__input} autoFocus maxLength={300}/>
      <button className={styles.newPost__button}>Post</button>
    </div>
  );
};

export default Posts;

