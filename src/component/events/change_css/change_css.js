import React, { Component } from 'react';
import './change_css.css';


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
        let btn_class = this.state.black ? "btn btn-default" : "btn btn-success";

        return (
            <div className="example-change_css">
            <h5>Cambio de estilo css</h5>
             <br></br>
             <div className="change_css-container">
                <button className={btn_class} onClick={this.changeColor.bind(this)}>
                    Clikeame
                </button>
             </div>
             </div>
        )
    }
}

export default ChangeCss