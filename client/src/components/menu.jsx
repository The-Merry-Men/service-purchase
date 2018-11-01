import React from 'react';
import styled from 'styled-components';
import MenuTopBar from './menu-top-bar.jsx';
import MenuBottomBar from './menu-bottom-bar.jsx'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <MenuTopBar open={this.props.open} up={this.props.up}/>
      <MenuBottomBar open={this.props.open} up={this.props.up}/>
      </div>
    )
  }
}

export default Menu;