import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Menu extends Component {
       render() {
         return (
            <div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to='/dashboard/home'>
                  <a className="nav-link active" href="#">
                  <FontAwesomeIcon
                      icon="home"
                      color="#000000"
                      size="lg"
                  />
                   <label className="link">Home</label></a></Link>
                </li>
               <li className="nav-item">
                  <Link to='/dashboard/listado'>
                  <a className="nav-link active" href="#">
                  <FontAwesomeIcon
                      icon="list-alt"
                      color="#000000"
                      size="lg"
                  />
                  <label className="link">Listado</label></a></Link>
               </li>
                <li className="nav-item">
                  <Link to='/dashboard/events'>
                  <a className="nav-link active" href="#">
                  <FontAwesomeIcon
                      icon="sun"
                      color="#000000"
                      size="lg"
                   />
                <label className="link">Eventos</label></a></Link>
                </li>
                <li className="nav-item">
                  <Link to='/login'>
                  <a className="nav-link active" href="#">
                  <FontAwesomeIcon
                      icon="sun"
                      color="#000000"
                      size="lg"
                   />
                <label className="link">Formulario</label></a></Link>
                </li>                
              </ul>
            </div>
           );
         }
    }

export default Menu