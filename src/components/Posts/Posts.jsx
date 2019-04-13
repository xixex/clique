import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const Posts = (props) => {
  const postElements = props.posts.map(e => <Post post={e} key={e.text} />).reverse();
  return (
    <div className={styles.posts}>
      <NewPost newPostText={props.newPostText} onPostChange={props.onPostChange} onSendPostClick={props.onSendPostClick} />
      {postElements}
    </div>
  );
};
export default Posts;
