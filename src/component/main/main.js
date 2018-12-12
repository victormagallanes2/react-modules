import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home'
import List from '../list/list'
import Events from '../events/events'


class Main extends Component {
       render() {
         return (
			  <main>
			  	<div className="wrapper">
				    <Switch>
				      <Route exact path='/' component={Home}/>
				      <Route path='/listado' component={List}/>
				      <Route path='/events' component={Events}/>
				    </Switch>
				</div>

			  </main>
           );
         }
    }

export default Main