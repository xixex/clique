import { connect } from 'react-redux';
import {
  addPostTextActionCreator,
  updateNewPostTextActionCreator,
} from '../../redux/reducers/postsPageReducer';
import Posts from './Posts';


const mapStateToProps = state => ({
  postsPage: state.postsPage,
});
const mapDispatchToProps = dispatch => ({
  onSendPostClick: (newPostText) => {
    dispatch(addPostTextActionCreator(newPostText));
  },
  onPostChange: (newText) => {
    dispatch(updateNewPostTextActionCreator(newText));
  },
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
