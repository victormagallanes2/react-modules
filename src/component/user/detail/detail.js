import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
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
      <div className="container">
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2"></span>
         </div>
         <div className="col-sm-6">
           <Link  to='/dashboard/user/update'><Button color="success" unsername='asdasd'>Edit</Button></Link>
         </div>        
        </div>      
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Usuario</span>
         </div>
         <div className="col-sm-6">
           <span className="d-block p-2 input-color">{this.state.user['username']}</span>
         </div>        
        </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Nombre</span>
         </div>
         <div className="col-sm-6">
           <span className="d-block p-2 input-color">{this.state.user['first_name']}</span>
         </div>        
       </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Apellido</span>
         </div>
         <div className="col-sm-6">
           <span className="d-block p-2 input-color">{this.state.user['last_name']}</span>
         </div>        
       </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Correo</span>
         </div>
         <div className="col-sm-6">
           <span className="d-block p-2 input-color">{this.state.user['email']}</span>
         </div>        
       </div>             
     </div> 
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