import React, { Component } from 'react';


class Onclick extends Component {

  constructor(props){
    super(props);
    this.state = { message:'Estado: False' };
    this.update = this.update.bind(this);
  } 
  
  update(){
    this.setState({message:'Estado: True'})
  }
 
  render(){
    return <div>
             <h4>Evento Onclick</h4>
             <button onClick={this.update}>Onclick</button><br></br>
             <br></br>
             <span>{this.state.message}</span>
          </div>
   }
  }


export default Onclick