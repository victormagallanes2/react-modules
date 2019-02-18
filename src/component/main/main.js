import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home'
import List from '../list/list'
import Events from '../events/events'
import Forms from '../form/form'
import UserDetail from '../user/detail/detail'
import UserUpdate from '../user/update/update'


import './main.css'


class Main extends Component {
       render() {
         return (
			  <main>
			  	<div className="wrapper">
				    <Switch>
	                  <Route path='/dashboard/home' component={Home}/>
				      <Route path='/dashboard/list' component={List}/>
				      <Route exact path='/dashboard/events' component={Events}/>
				      <Route exact path='/dashboard/forms' component={Forms}/>
				      <Route exact path='/dashboard/user/detail' component={UserDetail}/>
				      <Route exact path='/dashboard/user/update' component={UserUpdate}/>
		
				    </Switch>
				</div>
			  </main>
           );
         }
    }

export default Main