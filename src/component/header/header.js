import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


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
        let btn_class = this.state.black ? "Menu-oculto" : "Menu";

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
		
				  <ul className="navbar-nav">
				    
				    <li className="nav-item dropdown">
				      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
				      Admin
				      </a>
				      <div className="dropdown-menu">
				        <a className="dropdown-item" href="#">Mi perfil</a>
				        <a className="dropdown-item" href="#">Salir</a>
				      </div>
				    </li>
				  </ul>
				</nav>
			  </header>

			<div className={btn_class}>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to="listado">Listado</Link></li>
                  <li><Link to="/events">Eventos</Link></li>
                  <li><Link to="/">Formularios</Link></li>
                  <li><Link to="/">Login</Link></li>
                  <li><Link to="/">Comunicar 2  o mas Component</Link></li>
                </ul>
              </nav>
            </div>
            </div>
           );
         }
    }

export default Header
