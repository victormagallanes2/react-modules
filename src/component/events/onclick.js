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
    return <div className="example">
             <h5>Evento Onclick</h5>
             <br></br>
             <button onClick={this.update}>Onclick</button>
             <div className="toggle-container">
              {this.state.message}
             </div>
          </div>
   }
  }


export default Onclick