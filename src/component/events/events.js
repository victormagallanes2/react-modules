import React, { Component } from 'react';
import Toggle from './toggle';
import Onclick from './onclick';
import ChangeCss from './change_css';
import DropdownExample from '.././header/dropdown';


class Events extends Component {
 
  render(){
    return <div>
             <Onclick />
             <Toggle />
             <ChangeCss />
             <DropdownExample />
           </div>
       }
  }


export default Events