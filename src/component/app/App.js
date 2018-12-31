import React, { Component } from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import Login from '../authentication/login'
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
