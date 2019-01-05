import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import './login.css';


class Login extends Component {
  render() {
    return (
     <div className="login d-flex justify-content-center">
        <Form className="form">
        <h2 className="d-flex justify-content-center">Login</h2>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
