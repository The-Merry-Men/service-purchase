import React from 'react';
import styled from 'styled-components';
import MenuTopBar from './menu-top-bar.jsx';
import MenuBottomBar from './menu-bottom-bar.jsx'

const MenuWrapper = styled.div `
  position: absolute;
  z-index: 1;
  right: -36px;
  top: 36px;
`

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MenuWrapper onClick={(e) => {e.stopPropagation()}}>
      <MenuTopBar open={this.props.open} up={this.props.up}/>
      <MenuBottomBar open={this.props.open} up={this.props.up}/>
      </MenuWrapper>
    )
  }
}

export default Menu;