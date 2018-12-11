import React, { Component } from 'react';
import ContainerList from './container.js';


class List extends Component {
  constructor(props) {
    super(props)
    this.state = { list: [] }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json()
      })
      .then((list) => {
        this.setState({ list: list })
      })
  }

  render() {
    if (this.state.list.length > 0) {
      return (
          <ContainerList listado={this.state.list} />
      );
    }
    else {
      return <p>Cargando list...</p>
    }
  }

}

export default List