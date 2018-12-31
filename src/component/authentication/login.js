import React, { Component } from 'react';
import { Container, Col, Form } from 'reactstrap';
import { FormGroup, Label, Input, Button } from 'reactstrap';


class Login extends Component {
  render() {
    return (
     <div>
      <Container className="login">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default Login;
