import React from 'react';


export default class ListRow extends React.Component {
  render() {
    return(
            <article>
          
              <label>{this.props.id} </label>
              <label> {this.props.title}</label>
            </article>
    );
  }
}