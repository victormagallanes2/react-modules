import React, { Component } from 'react';
import Toggle from './toggle';
import Onclick from './onclick';
import ChangeCss from './change_css';


class Events extends Component {
 
  render(){
    return <div>
             <Onclick />
             <Toggle />
             <ChangeCss />
           </div>
       }
  }


export default Events