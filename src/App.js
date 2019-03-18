import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Profile/Posts/Posts";
import Messages from "./components/Profile/Messages/Messages";
import News from "./components/Profile/News/News"
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Profile/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <div className="content">
          <Profile/>
          <Navigation/>

          <Switch>

            <Route component={Posts} path='/posts'/>
            <Route component={Messages} path='/messages'/>
            <Route component={News} path='/news'/>
            <Route component={Music} path='/music'/>
            <Route component={Settings} path='/settings'/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>


  );
};

export default App;
