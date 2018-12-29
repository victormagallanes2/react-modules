import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Router } from 'react-router';
import Login from '../authentication/login'


class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path='/login' component={Login}/>
      </Router>
    );
  }
}

export default Routes;