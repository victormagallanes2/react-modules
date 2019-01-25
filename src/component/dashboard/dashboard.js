import React, { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component {
	isAuthenticated(){
		const token = localStorage.getItem('token');
		return token && token.length > 10;
	}
     render() {
     	const isAlreadyAuthenticated = this.isAuthenticated();
         return (
	            <div>
		            {!isAlreadyAuthenticated ? <Redirect to={{pathname: '/login'}}/> : (
		              <div>
	                  <Header />
	                  <Main />
	                  </div>
	                )}
			    </div>
                );
              }
	}
    

export default Dashboard