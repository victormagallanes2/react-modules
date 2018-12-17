import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import DropdownExample from '.././header/dropdown';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



class Header extends Component {
    constructor(){
        super();

        this.state = {
           black: true
        }
    }

    changeColor(){
       this.setState({black: !this.state.black})
    }

       render() {
        let btn_class = this.state.black ? "menu-hidden" : "menu";  

    return (
         	<div>
            <Navbar className="ml-auto fixed-top" color="light" light expand="md" >
              <button className="menu-button" onClick={this.changeColor.bind(this)}>
                <FontAwesomeIcon
                  icon="bars"
                          color="#000000"
                          size="lg"
                />
              </button>             
              <Collapse navbar>
                <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Admin
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Perfil
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Salir
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
           <div className={btn_class}>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to='/'>
                  <a className="nav-link active" href="#"><FontAwesomeIcon
                      icon="home"
                      color="#000000"
                      size="lg"
                   /><label className="link">Home</label></a></Link>
                </li>
               <li className="nav-item">
                  <Link to='/listado'>
                  <a className="nav-link active" href="#"><FontAwesomeIcon
                      icon="list-alt"
                      color="#000000"
                      size="lg"
                   /><label className="link">Listado</label></a></Link>
                </li>
                <li className="nav-item">
                  <Link to='/events'>
                  <a className="nav-link active" href="#"><FontAwesomeIcon
                      icon="sun"
                      color="#000000"
                      size="lg"
                   /><label className="link">Eventos</label></a></Link>
                </li>
              </ul>
            </div>            
          </div>
           );
         }
    }

export default Header
