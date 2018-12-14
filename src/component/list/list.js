import React, { Component } from 'react';
import ContainerList from './container.js';
import ReactLoading from 'react-loading';


class List extends Component {
  constructor(props) {
    super(props)
    this.state = { list: [] }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((list) => {
        this.setState({ list: list })
      })
  }

  render() {
    let type = 'spin';
    let color = '#000000';
    if (this.state.list.length > 0) {
      return (
          <ContainerList listado={this.state.list} />
      );
    }
    else {
    
      return <div class="container h-100">
               <div class="row h-100 justify-content-center align-items-center">
                 <ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
               </div>
             </div>
             
    }
  }

}

export default List