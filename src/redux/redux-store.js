import {combineReducers, createStore} from "redux";
import messagesPageReducer from './messagesPageReducer'
import postsPageReducer from './postsPageReducer'
import profilePageReducer from './profilePageReducer'

let reducers = combineReducers({
  messagesPage: messagesPageReducer,
  postsPage: postsPageReducer,
  profilePage: profilePageReducer
});
let store = createStore(reducers);

export default store;