import { combineReducers } from 'redux';

import messagesPage from './messagesPage';
import postsPage from './postsPage';
import profilePage from './profilePage';

const reducers = combineReducers({
  messagesPage,
  postsPage,
  profilePage,
});
export default reducers;
