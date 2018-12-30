import React, { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Login from '../authentication/login'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../home/home'
import Events from '../events/events'


class Dashboard extends Component {
     render() {
         return (
	            <div>     
                  <Header />
                  <Main />
		        </div>
            );
          }
    }

export default Dashboard