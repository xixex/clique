import React from 'react';

import styles from './Post.module.css';

const Post = props => (

  <div className={styles.post}>
    <div className={styles.post__head}>
      <img
        src={props.post.postBy.img}
        alt="NAME"
        className={styles.post__img}
      />
      <div className={styles.post__name}>{props.post.postBy.name}</div>
    </div>
    <div className={styles.post__content}>
      <div className={styles.post__text}>{props.post.text}</div>
    </div>

  </div>
);
export default Post;
