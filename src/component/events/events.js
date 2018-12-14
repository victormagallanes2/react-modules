import React, { Component } from 'react';
import Toggle from './toggle';
import Onclick from './onclick';
import ChangeCss from './change_css';


class Events extends Component {
 
  render(){
    return <div className="container">
             <div className="row">
              <div className="col-6">
               <Onclick />               
              </div>
              <div className="col-6">
               <Toggle />
              </div>

            </div>
            <div className="row">
              <div className="col-6">
               <ChangeCss />               
              </div>
              <div className="col-6">
  
              </div>

            </div>            
           </div>
       }
  }


export default Events