import { combineReducers, createStore } from 'redux';
import messagesPageReducer from './reducers/messagesPageReducer';
import postsPageReducer from './reducers/postsPageReducer';
import profilePageReducer from './reducers/profilePageReducer';

const reducers = combineReducers({
  messagesPage: messagesPageReducer,
  postsPage: postsPageReducer,
  profilePage: profilePageReducer,
});
const store = createStore(reducers);

export default store;
