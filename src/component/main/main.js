import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home'
import List from '../list/list'
import Menu from '../menu/menu'
import Events from '../events/events'
import './main.css';


class Main extends Component {
       render() {
         return (
			  <main>
			  	<div className="Contenido">
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