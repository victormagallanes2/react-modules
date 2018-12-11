import React, { Component } from 'react';


class ChangeCss extends Component {
    constructor(){
        super();

        this.state = {
           black: true
        }
    }

    changeColor(){
       this.setState({black: !this.state.black})
    }

    render(){
        let btn_class = this.state.black ? "btn btn-danger" : "btn btn-success";

        return (

             <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
        )
    }
}

export default ChangeCss