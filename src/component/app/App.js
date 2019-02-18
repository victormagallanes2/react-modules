import React, { Component } from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import Login from '../authentication/login'
import Dashboard from '../dashboard/dashboard'
import Singup from '../user/create/create'


class App extends Component {
     render() {
         return (
	            <div>
	              <Switch>
	                <Route path="/dashboard" component={Dashboard}/>
		            <Route path="/login" component={Login}/>
		            <Route exact path='/singup' component={Singup}/>
		            <Redirect from='/' to="/dashboard/home" />
		          </Switch>
		        </div>
            );
          }
    }

export default App
