import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import DropdownExample from '.././header/dropdown';


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
			  <header>
			   <nav className="navbar navbar-expand-sm bg-blue justify-content-between fixed-top">
		
				  <button className="menu-button" onClick={this.changeColor.bind(this)}>
				    <FontAwesomeIcon
				      icon="bars"
                      color="#ffffff"
                      size="lg"
				    />
				  </button>
          <DropdownExample />
{/* 				  <ul className="navbar-nav">
				    
				    <li className="nav-item dropdown">
				      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
				      Admin
				      </a>
				      <div className="dropdown-menu">
				        <a className="dropdown-item" href="#">Mi perfil</a>
				        <a className="dropdown-item" href="#">Salir</a>
				      </div>
				    </li>
				  </ul> */}
				</nav>
			  </header>

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
