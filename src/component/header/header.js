import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Menu from '.././menu/menu';

import {
  Collapse,
  Navbar,
  Nav,
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
             <Menu />
           </div>            
          </div>
           );
         }
    }

export default Header
