import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './menu.css';


class Menu extends Component {
       render() {
         return (
            <div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="li-margin" to='/dashboard/home'>
                  <FontAwesomeIcon
                      icon="home"
                      color="#000000"
                      size="lg"
                  />
                   <label className="link">Home</label></Link>
                </li>
               <li className="nav-item">
                  <Link className="li-margin" to='/dashboard/list'>
                  
                  <FontAwesomeIcon
                      icon="list-alt"
                      color="#000000"
                      size="lg"
                  />
                  <label className="link">Listado</label></Link>
               </li>
                <li className="nav-item">
                  <Link className="li-margin" to='/dashboard/events'>
                  
                  <FontAwesomeIcon
                      icon="sun"
                      color="#000000"
                      size="lg"
                   />
                <label className="link">Eventos</label></Link>
                </li>
{/*                <li className="nav-item">
                  <Link className="li-margin" to='/dashboard/forms'>
                  
                  <FontAwesomeIcon
                      icon="list-alt"
                      color="#000000"
                      size="lg"
                   />
                <label className="link">Formulario</label></Link>
                </li> */}               
                         
              </ul>
            </div>
           );
         }
    }

export default Menu