import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import MessagesContainer from './Messages/MessagesContainer';
import PostsContainer from './Posts/PostsContainer';

const App = props => (
  <div className="app-wrapper">
    <Header />
    <div className="content">
      <Profile person={props.state.profilePage.person} />
      <Navigation />
      <Switch>
        <Route
          render={() => (
            <PostsContainer
              posts={props.state.postsPage.posts}
              store={props.store}
              newPostText={props.state.postsPage.newPostText}
            />
          )}
          path="/posts"
        />
        <Route
          render={() => (
            <MessagesContainer
              newMessageText={props.state.messagesPage.newMessageText}
              store={props.store}
              messages={props.state.messagesPage.messages}
            />
          )}
          path="/messages"
        />
        <Route render={News} path="/news" />
        <Route render={Music} path="/music" />
        <Route render={Settings} path="/settings" />
      </Switch>
    </div>
  </div>
);

export default App;
