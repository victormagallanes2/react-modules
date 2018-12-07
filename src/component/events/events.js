import React, { Component } from 'react';
import Toggle from './toggle';
import Onclick from './onclick';


class Events extends Component {
 
  render(){
    return <div>
             <Onclick />
             <Toggle />
           </div>
       }
  }


export default Events