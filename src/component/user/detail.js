import React, { Component } from 'react';
import './detail.css'


class UserDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { user: [] }
  }

  componentWillMount() {
    /*const userid = localStorage.getItem('user');*/
    const token = localStorage.getItem('token');
    const JWTtoken = `JWT ${token}`
    fetch('http://localhost:8000/user/detail/7/', {  
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
        this.setState({ user: user })
      })
  }

  render() {
    const diccionario = this.state.user
    for (let x in diccionario) {
      console.log(x.username)
    }
    return (
    <div className="container">
      <div className="row d-flex justify-content-center space_line">      
       <div className="col-sm-2">
         <span className="d-block p-2">Usuario</span>
       </div>
       <div className="col-sm-6">
         <span className="d-block p-2 input-color">victor</span>
       </div>        
     </div>
      <div className="row d-flex justify-content-center space_line">      
       <div className="col-sm-2">
         <span className="d-block p-2">Nombre</span>
       </div>
       <div className="col-sm-6">
         <span className="d-block p-2 input-color">victor</span>
       </div>        
     </div>
      <div className="row d-flex justify-content-center space_line">      
       <div className="col-sm-2">
         <span className="d-block p-2">Apellido</span>
       </div>
       <div className="col-sm-6">
         <span className="d-block p-2 input-color">magallanes</span>
       </div>        
     </div>
      <div className="row d-flex justify-content-center space_line">      
       <div className="col-sm-2">
         <span className="d-block p-2">Correo</span>
       </div>
       <div className="col-sm-6">
         <span className="d-block p-2 input-color">victormagallanes2@gmail.com</span>
       </div>        
     </div>             
   </div>      
    );
  }
}

export default UserDetail