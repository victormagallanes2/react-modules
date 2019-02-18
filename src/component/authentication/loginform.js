import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './login.css';
import superagent from 'superagent';


class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUsername(event) {
    this.setState({username: event.target.value})
  }

  onChangePassword(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    superagent
    .post('http://localhost:8000/api-token-auth/')
    .send({'username': this.state.username, 'password': this.state.password})
    .end((err, res) => {
      if(err) {this.setState({errorMessage:"Authentication Failed"}); return;}
      localStorage.setItem('token', res.body.token);
      localStorage.setItem('user', res.body.user.id);
      this.props.onSuccessfullogin();
    window.location.reload();
     });
    }
  

  render() {
    return (
     <div className="login d-flex justify-content-center">
        <Form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <h2 className="d-flex justify-content-center">Login</h2>
            <FormGroup>
              <Label>Usuario</Label>
              <Input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername.bind(this)}
                placeholder="myemail@email.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Contraseña</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword.bind(this)}
                placeholder="********"
              />

            </FormGroup>
          <Button type="submit">Submit</Button>
          <p><Link  to='/singup'>Registrarse</Link></p>
         
        </Form>
      
        
      </div>
    );
  }
}

export default LoginForm;