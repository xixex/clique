import { Route, Switch } from 'react-router-dom';
import React from 'react';

import './App.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import MessagesContainer from './Messages/MessagesContainer';
import Music from './Music/Music';
import News from './News/News';
import Settings from './Settings/Settings';
import PostsContainer from './Posts/PostsContainer';
import ProfileContainer from './Profile/ProfileContainer';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <div className="content">
      <ProfileContainer />
      <Navigation />
      <Switch>
        <Route
          render={() => (
            <PostsContainer />
          )}
          path="/posts"
        />
        <Route
          render={() => (
            <MessagesContainer />
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
