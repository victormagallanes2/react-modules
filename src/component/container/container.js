import React, { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';


class Container extends Component {
    
     render() {
         return (
             <div>
               <Header />
               <Main />
             </div>
            );
          }
    }

export default Container
