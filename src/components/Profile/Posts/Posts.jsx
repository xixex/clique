import styles from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost"
const Posts = () => {
  return (
    <div className={styles.posts}>
      <NewPost />
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
};
export default Posts;