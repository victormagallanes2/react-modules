import React, { Component } from 'react';
import ListRow from './row/row.js';
import { Table } from 'reactstrap';
import './container.css';


class ContainerList extends Component {
    render() {
      return (
        <div className="container">
            <div className="row">
              <Table hover className="tablewhite">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  { this.props.listado.map((list) => {
                    return <ListRow key={ list.id }
                                    id={ list.id }
                                    username={ list.username }
                                    first_name={ list.first_name }
                                    email={ list.email }/>
                          })
                  }
                </tbody>
              </Table>
              </div>
            </div>
      );
    }
  }

  export default ContainerList