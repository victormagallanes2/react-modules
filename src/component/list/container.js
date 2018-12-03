import React from 'react';
import ListRow from './row.js';


export default class ContainerList extends React.Component {
    render() {
      return (
          <section>
            <div id="list">
            {
              this.props.listado.map((list) => {
                return <ListRow key={ list.id }
                                    id={ list.id }
                                    title={ list.title }
                                
                                     />
                                    })
            }
            </div>
          </section>
      );
    }
  }