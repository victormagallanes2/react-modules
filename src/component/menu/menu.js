import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Menu extends Component {
       render() {
         return (
            <div className="Menu">
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
           );
         }
    }

export default Menu