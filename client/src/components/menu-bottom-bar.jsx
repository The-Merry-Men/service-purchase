import React from 'react';
import styled from 'styled-components';

const MenuBottomBarWrapper = styled.div `
    display: flex;
    flex-direction: column;
    background: ${props => props.open ? "white" : "#1b1b1d"}
    border: 1px solid ${props => props.open ? "rgb(224, 224, 224)" : "black"};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? "whitesmoke" : "black"};
    height: 168px;
    width: 180px;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    justify-content: space-evenly;
`

const Text13Div = styled.div `
    font-size: 16px;
    font-weight: 600;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    align: left;
    margin-left: 12px;
    margin-top: 4px;
    color : ${props => props.clicked ? 'green' : 'black'}
`

class MenuButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }
  clickHandler() {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <Text13Div onClick={this.clickHandler.bind(this)} clicked={this.state.clicked}>{this.props.text}</Text13Div>
    )
  }
}

class MenuBottomBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MenuBottomBarWrapper open={this.props.open}>
      <MenuButton text='Market Order' />
      <MenuButton text='Limit Order'/>
      <MenuButton text='Stop Loss Order'/>
      <MenuButton text='Stop Limit Order'/>
      </MenuBottomBarWrapper>
    )
  }
}

export default MenuBottomBar;