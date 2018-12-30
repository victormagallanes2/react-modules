import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom'
import Home from '../home/home'
import List from '../list/list'
import Events from '../events/events'


class Main extends Component {
       render() {
         return (
			  <main>
			  	<div className="wrapper">
				    <Switch>
				      
	                  <Route path='/dashboard/home' component={Home}/>
				      <Route path='/dashboard/listado' component={List}/>
				      <Route exact path='/dashboard/events' component={Events}/>
			
				    </Switch>
				</div>

			  </main>
           );
         }
    }

export default Main