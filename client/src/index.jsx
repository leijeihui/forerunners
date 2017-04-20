import React from 'react';
import { render } from 'react-dom';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import {BrowserRouter as Router, Route, Link, HashRouter} from 'react-router-dom';
import {BrowserHistory} from 'react-router';

render(
  <HashRouter>
    <div>
      {/*<ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>*/}
      <Route exact path="/" component={() => {
        return <Landing />;
      }} />
      <Route exact path="/login" component={() => {
        return <Login />;
      }} />
      <Route exact path="/signup" component={() => {
        return <Signup />;
      }} />
    </div>
  </HashRouter>
  , 
  document.getElementById('app')
);