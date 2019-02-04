import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class UserUpdate extends Component {
  render() {
    return (
      <div className="container">
        <Form>
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
           <Input type="username" name="username" id="username" placeholder="Usuario" />
         </div>        
        </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Nombre</span>
         </div>
         <div className="col-sm-6">
           <Input type="first_name" name="first_name" id="first_name" placeholder="Nombre" />
         </div>        
       </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Apellido</span>
         </div>
         <div className="col-sm-6">
       <Input type="last_name" name="last_name" id="last_name" placeholder="Apellido" />         </div>        
       </div>
        <div className="row d-flex justify-content-center space_line">      
         <div className="col-sm-2">
           <span className="d-block p-2">Correo</span>
         </div>
         <div className="col-sm-6">
          <Input type="email" name="email" id="email" placeholder="Correo" />
         </div>        
       </div>
      </Form>           
     </div> 
    );
  }
}

export default UserUpdate
