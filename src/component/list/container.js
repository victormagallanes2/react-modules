import React, { Component } from 'react';
import ListRow from './row.js';
import { Table } from 'reactstrap';


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
                    <th>Email</th>
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody>
                  { this.props.listado.map((list) => {
                    return <ListRow key={ list.id }
                                    id={ list.id }
                                    username={ list.username }
                                    email={ list.email }
                                    website={ list.website }/>
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