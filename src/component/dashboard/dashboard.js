import React, { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';


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