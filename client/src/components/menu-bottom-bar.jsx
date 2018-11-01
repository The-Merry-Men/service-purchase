import React from 'react';
import styled from 'styled-components';

const rhBlack = '"#1b1b1d"';
const rhGreen = "#21ce99";
const rhOrange = "#f45531";

const MenuBottomBarWrapper = styled.div `
    display: flex;
    flex-direction: column;
    background: ${props => props.open ? "white" : rhBlack}
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
    color : ${props => {
      if (!props.clicked) {
        return "black"
      } else {
        if (props.up) {
          return rhGreen
        } else {
          return rhOrange
        }
      }
    }}
`

class MenuButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: props.default
    }
  }
  clickHandler() {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <Text13Div onClick={this.clickHandler.bind(this)} clicked={this.state.clicked} up={this.props.up}>{this.props.text}</Text13Div>
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
      <MenuButton text='Market Order' default={true}/>
      <MenuButton text='Limit Order'/>
      <MenuButton text='Stop Loss Order'/>
      <MenuButton text='Stop Limit Order'/>
      </MenuBottomBarWrapper>
    )
  }
}

export default MenuBottomBar;