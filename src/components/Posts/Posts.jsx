import React from 'react';

import styles from './Posts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const Posts = (props) => {
  const { posts } = props.postsPage;
  const postElements = posts.map(e => <Post post={e} key={e.text} />).reverse();
  return (
    <div className={styles.posts}>
      <NewPost
        postsPage={props.postsPage}
        onPostChange={props.onPostChange}
        onSendPostClick={props.onSendPostClick}
      />
      {postElements}
    </div>
  );
};
export default Posts;
