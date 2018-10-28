import React from 'react'
import styled from 'styled-components'

const TopBarWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${props => props.open ? "white" : "#1b1b1d"}
    border: 1px solid ${props => props.open ? "rgb(224, 224, 224)" : "black"};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? "whitesmoke" : "black"};
    height: 47px;
    width: 228px;
    align-items: center;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
`
const Buy = styled.div `
    margin-left: 12px;
    margin-top: 4px;
    font-size: 16px;
    color : ${props => props.open ? "black" : "white"};
`
const DotsWrapper = styled.div `
    margin-right: 10px;
`
const Dot = styled.span `
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background: ${props => props.open ? "black" : "white"};
    display: inline-block;
    margin-right: 3px;
    margin-bottom: 3px;
    ${DotsWrapper}: hover & {
        background: ${props => props.up ? "#21ce99" : "#f45531"};
    }
`


//props.ticker //props.open
//is there a better way than just passing this.props.open to everything? redux
class NameTopBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TopBarWrapper open={this.props.open}>
                <Buy open={this.props.open}>Buy {this.props.ticker}</Buy>
                <DotsWrapper open={this.props.open}>
                <Dot open={this.props.open} up={this.props.up}></Dot>
                <Dot open={this.props.open} up={this.props.up}></Dot>
                <Dot open={this.props.open} up={this.props.up}></Dot>
                </DotsWrapper>
            </TopBarWrapper>
        )   
    }
}

export default NameTopBox;
