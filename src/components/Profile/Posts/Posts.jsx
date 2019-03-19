import styles from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost"

const Posts = (props) => {
  let postElements = props.posts.map(e => <Post post={e}/>);
  return (
    <div className={styles.posts}>
      <NewPost/>
      {postElements}
    </div>
  );
};
export default Posts;