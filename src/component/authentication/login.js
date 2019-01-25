import React, { Component } from 'react';
import './login.css';
import LoginForm from './loginform';
import { Redirect } from 'react-router-dom';


class Login extends Component {

  isAuthenticated(){
    const token = localStorage.getItem('token');
    return token && token.length > 10;
  }
  handleSuccessfullogin() {
    this.setState();

    }

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();
       return (
            <div>
              {isAlreadyAuthenticated ? <Redirect to={{pathname: '/'}}/> : (
                <div>
                  <LoginForm onSuccessfullogin={this.handleSuccessfullogin.bind(this)}/>
                </div>
              )}
            </div>
              );
            }
  }

  
export default Login;
