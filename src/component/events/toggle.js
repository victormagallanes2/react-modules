import React, { Component } from 'react';


class Toggle extends Component {

  constructor(props){
    super(props);
    this.state = { showing: true };
  } 

  render(){
    const { showing } = this.state;
    return <div>
	         <h4>Evento Toggle</h4>
	         <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
	         <div style={{ display: (showing ? 'block' : 'none') }}>
	         <p>Contenido de mi div</p>
	         </div>
	       </div>
       }
  }


export default Toggle