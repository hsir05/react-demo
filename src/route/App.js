import React, { Component } from 'react';
import {
    HashRouter as Router,Switch,
    Route
} from 'react-router-dom'

import login from '../pages/login/login'
import home from '../pages/home/home'
import './App.css';

export default class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route path='/login' component={login}/>
        </Switch>
     </Router>
    )
  }
}
