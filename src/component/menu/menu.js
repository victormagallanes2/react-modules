import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const Menu = () => (
  <div className="Menu">
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="listado">Listado</Link></li>
        <li><Link to="listado">Formularios</Link></li>
        <li><Link to="listado">Login</Link></li>
        <li><Link to="listado">Comunicar 2  o mas Component</Link></li>

      </ul>
    </nav>
  </div>
)

export default Menu