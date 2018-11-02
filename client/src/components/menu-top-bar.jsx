import React from 'react';
import styled from 'styled-components';

const TopBarWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${props => props.open ? "white" : "#1b1b1d"}
    border: 1px solid ${props => props.open ? "rgb(224, 224, 224)" : "black"};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? "whitesmoke" : "black"};
    height: 52px;
    width: 180px;
    align-items: center;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
`

const OrderType = styled.div `
    margin-left: 12px;
    margin-top: 4px;
    font-size: 16px;
    color : ${props => props.open ? "black" : "white"};
`

class MenuTopBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TopBarWrapper open={this.props.open} up={this.props.up}>
        <OrderType open={this.props.open} up={this.props.up}>Order Type</OrderType>
      </TopBarWrapper>
    )
  }
}

export default MenuTopBar;