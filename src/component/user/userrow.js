import React, { Component } from 'react';


class UserRow extends Component {
  render() {
    return(
            <tr>
              <th scope="row">{this.props.id}</th>
              <td>{this.props.username}</td>
              <td>{this.props.email}</td>
            </tr>
    );
  }
}

export default UserRow