import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import './singup.css';


class SingupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      redirect: false
    }
  }


  onChangeUsername(event) {
    this.setState({ username: event.target.value })
  }

  onChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  onChangePassword(event) {
    this.setState({password: event.target.value})
  }


  handleSubmit(event) {
/*    event.preventDefault();*/
    fetch(`http://localhost:8000/user/create/`, {  
      method: 'post',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': '' },
      body: JSON.stringify({
        "username": this.state.username,
        "email": this.state.email,
        "password": this.state.password,
      })
     
      })
    this.setState({ redirect: true });
    }
  

  render() {
/*     const { redirect } = this.state;

     if (redirect) {
       return <Redirect push to='/login'/>;
     }*/
    return (
     <div className="singup d-flex justify-content-center">
        <AvForm className="form" onSubmit={this.handleSubmit.bind(this)} action='/login'>
        <h2 className="d-flex justify-content-center">Singup</h2>
        <AvField 
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChangeUsername.bind(this)}
          placeholder="username"
          label="Username"
          errorMessage="Invalid name"
          validate={{
            required: {value: true},
            pattern: {value: '^[A-Za-z0-9]+$'},
            minLength: {value: 6},
            maxLength: {value: 16}
          }} />
            <AvField
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail.bind(this)}
                placeholder="email"
                validate={{
                  required: {value: true},
                  pattern: {value: '^[A-Za-z0-9]+$'},
                  minLength: {value: 6}
                }}
            />            
            <AvField
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword.bind(this)}
                placeholder="********"
                validate={{
                  required: {value: true}
                }}                
              />
            <AvField
                type="password"
                name="password2"
                placeholder="********"
                validate={{
                  match:{value:'password'},
                  required: {value: true}
                }}
              />         
          <Button type="submit">Submit</Button>

   
        </AvForm>
        
      </div>
    );
  }
}

export default SingupForm;
