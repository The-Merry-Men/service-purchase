import React from 'react';
import styled from 'styled-components';
import MenuTopBar from './menu-top-bar.jsx';
import MenuBottomBar from './menu-bottom-bar.jsx'

const MenuWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: -36px;
  top: 36px;
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, up } = this.props;
    return (
      <MenuWrapper onClick={(e) => { e.stopPropagation(); }}>
        <MenuTopBar open={open} up={up} />
        <MenuBottomBar open={open} up={up} />
      </MenuWrapper>
    );
  }
}

export default Menu;
