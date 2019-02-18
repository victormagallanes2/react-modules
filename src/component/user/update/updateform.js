import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { Redirect } from 'react-router';


class UserUpdateForm extends Component {
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


  onChangeUsername(event) {
    this.setState({ username: event.target.value })
  }

  onChangeFirtName(event) {
    this.setState({first_name: event.target.value})
  }

  onChangeLastName(event) {
    this.setState({last_name: event.target.value})
  }

  onChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit(event) {

    const token = localStorage.getItem('token');
    const JWTtoken = `JWT ${token}`;
    const userid = localStorage.getItem('user');
    fetch(`http://localhost:8000/user/update/${userid}/`, {  
      method: 'put',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': JWTtoken },
      body: JSON.stringify({
        "username": this.state.username,
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "email": this.state.email
      })
     
      })
    this.setState({ redirect: true });

    }


  render() {
/*     const { redirect } = this.state;

     if (redirect) {
       return <Redirect push to='/dashboard/user/detail'/>;
     }*/
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit.bind(this)} action='/dashboard/user/detail'>
        <div className="row d-flex justify-content-center space_line">
         <div className="col-sm-2">
           <span className="d-block p-2"></span>
         </div>
         <div className="col-sm-6">
           <Button>Save</Button>
         </div>        
        </div>      
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Usuario</span>
         </div>
         <div className="col-sm-6">
           <Input 
             type="text" 
             name="username" 
             id="username"
             placeholder="Usuario"
             value={this.state.username}
             onChange={this.onChangeUsername.bind(this)}
            />
         </div>        
        </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Nombre</span>
         </div>
         <div className="col-sm-6">
           <Input 
             type="text" 
             name="first_name" 
             id="first_name" 
             placeholder="Nombre"
             value={this.state.first_name}
             onChange={this.onChangeFirtName.bind(this)}
             />
         </div>        
       </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Apellido</span>
         </div>
         <div className="col-sm-6">
       <Input 
         type="last_name" 
         name="last_name" 
         id="last_name" 
         placeholder="Apellido"
         value={this.state.last_name}
         onChange={this.onChangeLastName.bind(this)}
         />
       </div>        
       </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Correo</span>
         </div>
         <div className="col-sm-6">
          <Input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Correo"
            value={this.state.email}
            onChange={this.onChangeEmail.bind(this)}
            />
         </div>        
       </div>
      </Form>           
     </div> 
    );
  }
}

export default UserUpdateForm;
