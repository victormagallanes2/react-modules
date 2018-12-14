import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class  DropdownExample extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
  
    const { theme, dropdownOpen } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';
    
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret className="drop">
          Admin
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Perfil</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Salir</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    
  }
  
}

export default DropdownExample