import React, { Component } from 'react';


class Toggle extends Component {

  constructor(props){
    super(props);
    this.state = { showing: true };
  } 

  render(){
    const { showing } = this.state;
    return <div className="example">
            <h5>Evento Toggle</h5>
            <br></br>
            <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
            <div style={{ display: (showing ? 'block' : 'none') }}>
            <div className="toggle-container">
              Contenido de mi div
            </div>
            </div>
	         </div>
       }
  }


export default Toggle