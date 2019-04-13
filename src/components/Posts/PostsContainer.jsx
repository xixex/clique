import React from 'react';
import {
  addPostTextActionCreator,
  updateNewPostTextActionCreator,
} from '../../redux/postsPageReducer';
import Posts from './Posts';

const PostsContainer = (props) => {
  const onSendPostClick = () => {
    props.store.dispatch(addPostTextActionCreator(props.store.getState().postsPage.newPostText));
  };

  const onPostChange = (newText) => {
    props.store.dispatch(updateNewPostTextActionCreator(newText));
  };

  return (
    <Posts
      onPostChange={onPostChange}
      onSendPostClick={onSendPostClick}
      newPostText={props.store.getState().postsPage.newPostText}
      posts={props.store.getState().postsPage.posts}
    />
  );
};
export default PostsContainer;
