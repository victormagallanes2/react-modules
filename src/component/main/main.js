import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home'
import List from '../list/list'
import Menu from '../menu/menu'
import './main.css';



const Main = () => (
  <main>
  	<Menu />
  	<div className="Contenido">
	    <Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/listado' component={List}/>
	    </Switch>
	</div>

  </main>
)

export default Main