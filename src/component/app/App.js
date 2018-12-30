import React, { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Login from '../authentication/login'
import { Redirect, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../home/home'
import Events from '../events/events'
import Dashboard from '../dashboard/dashboard'


class App extends Component {
     render() {
         return (
	            <div>
	              <Switch>
	                <Route path="/dashboard" component={Dashboard}/>
		            <Route path="/login" component={Login}/>
		            <Redirect from='/' to="/dashboard/home" />
		          </Switch>
		        </div>
            );
          }
    }

export default App
