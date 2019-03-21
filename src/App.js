import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News"
import {Route, Switch} from 'react-router-dom';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return (

      <div className="app-wrapper">
        <Header/>
        <div className="content">
          <Profile person={props.state.person}/>
          <Navigation/>
          <Switch>
            <Route render={() => <Posts posts={props.state.posts} addPost = {props.addPost}/>} path='/posts'/>
            <Route render={() => <Messages messages={props.state.messages}/>} path='/messages'/>
            <Route render={News} path='/news'/>
            <Route render={Music} path='/music'/>
            <Route render={Settings} path='/settings'/>
          </Switch>
        </div>
      </div>
  );
};

export default App;
