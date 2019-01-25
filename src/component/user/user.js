import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class User extends Component {
  render() {
    return (
    <div className="container">
      <div className="row d-flex justify-content-center">
      <Form>
        <FormGroup>
          <Label for="username">Usuario</Label>
          <Input type="username" name="username" id="username" placeholder="Usuario" />
        </FormGroup>

        <FormGroup>
          <Label for="first_name">Nombre</Label>
          <Input type="first_name" name="first_name" id="first_name" placeholder="Nombre" />
        </FormGroup>

        <FormGroup>
          <Label for="last_name">Apellido</Label>
          <Input type="last_name" name="last_name" id="last_name" placeholder="Apellido" />
        </FormGroup>        

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="with a placeholder" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
      </div>
      </div>
    );
  }
}

export default User
