import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse, Navbar, Nav } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle } from 'reactstrap';
import { DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Menu from '.././menu/menu';
import './header.css';


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

    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.reload();
      }
    imp() {
      const user = localStorage.getItem('user');
      console.log(user);
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
                      <DropdownItem onClick={this.imp.bind(this)}>
                        <Link  to='/dashboard/user/{user}'>Perfil</Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={this.logout.bind(this)}>
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
