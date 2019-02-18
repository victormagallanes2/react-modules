import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserDetailView from './detailview';
import './detail.css'


class UserDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { user: [] }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    const JWTtoken = `JWT ${token}`;
    const userid = localStorage.getItem('user');
    fetch(`http://localhost:8000/user/detail/${userid}/`, {  
      method: 'get',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': JWTtoken },
     
      })
      .then((response) => {
        return response.json()
      })
      .then((user) => {
        this.setState({ user: user})
      })
  }

  render() {
    let type = 'spin';
    let color = '#000000';
    if (Object.keys(this.state.user).length !== 0) {
      return (
      <UserDetailView
       UserName={this.state.user['username']}
       FirstName={this.state.user['first_name']}
       LastName={this.state.user['last_name']}
       Email={this.state.user['email']}
       />
     );
    }
    else {
      return <div className="container h-100">
              <div className="row h-100 justify-content-center align-items-center">
                <ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
             </div>
            </div>
    
             
    }
 }
}

export default UserDetail;