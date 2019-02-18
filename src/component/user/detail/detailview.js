import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './detail.css'


class UserDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.UserName,
      first_name: this.props.FirstName,
      last_name: this.props.LastName,
      email: this.props.Email,
      redirect: false
    }
  }


componentWillReceiveProps(nextProps){
  if (nextProps.UserName !== this.props.UseNname) {
    this.setState({ 
      username: nextProps.UserName,
      first_name: nextProps.FirstName,
      last_name: nextProps.LastName,
      email: nextProps.Email

       })
  }
}

  render() {
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
           <span className="d-block p-2 input-color">{this.state.username}</span>
         </div>        
        </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Nombre</span>
         </div>
         <div className="col-sm-6">
           <span className="d-block p-2 input-color">{this.state.first_name}</span>
         </div>        
       </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Apellido</span>
         </div>
         <div className="col-sm-6">
           <span className="d-block p-2 input-color">{this.state.last_name}</span>
         </div>        
       </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Correo</span>
         </div>
         <div className="col-sm-6">
           <span className="d-block p-2 input-color">{this.state.email}</span>
         </div>        
       </div>             
     </div> 
     );
    }

}

export default UserDetailView;