import React, { Component } from 'react';
import './home.css';


class Home extends Component {
       render() {
         return (
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 d-flex justify-content-center">
                    <img className="marco" src="/img/shodan-a.gif" alt=""/>
                  </div>
                    <h3>Bienvenido patetico usuario</h3>
                </div>
              </div>
           );
         }
    }

export default Home