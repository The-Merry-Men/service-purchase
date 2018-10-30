import React from 'react';
import styled from 'styled-components';

const MiddleBarWrapper = styled.div `
    border: 1px solid black;
    width: 228px;
    background: ${props => props.open ? "white" : "#1b1b1d"}
    border: 1px solid ${props => props.open ? "rgb(224, 224, 224)" : "black"};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? "whitesmoke" : "black"};
`

const Text13Div = styled.div `
    font-size: 13px;
    font-weight: 400;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
`

const ShareLine = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const CenterLine = styled(ShareLine) `
    justify-content: center;
`

const ShareText = styled(Text13Div) `
    margin-right: 5px;
    padding-left: 10px;
    padding-right: 10px;
    color : ${props => props.open ? "black" : "white"};
`

const PriceText = styled(ShareText) `
    font-weight: 600;
`

const ShareInput = styled.input `
    text-align: right;
    width: 40px;
    border:1px solid ${props => props.open ? "#fafafa" : "black"} ;
    background: ${props => props.open ? "#fafafa" : "black"};
    color: ${props => props.open ? "#8c8c8e" : "#8c8c8e"}; 
    border-radius: 2px;
    padding-right: 5px;
    margin-right: 10px;
    margin-bottom: 4px;
    ${ShareLine}: hover & {
        border-color: ${props => props.open ? "#cbcbcd" : "#8c8c8e"};
    }
`
const MarketPriceText = styled(ShareText) `
    color: ${props => props.up ? "#21ce99" : "#f45531"};
    font-weight: 600; 
`
//needs css changes
const ExecuteCheck = styled.button `
    background-color: #f45531;
    border: none;
    padding: 8px;
    border-radius: 4px;
    display: inline-block;
`
//needs css changes
const ExecuteMessage = styled(Text13Div) `
    color: #cbcbcd;
    margin-left: 10px;
`

const ReviewButton = styled(ExecuteCheck) `
    color: black;
    padding: 10px 52px;
    &:hover {
        background-color: #ff6340;
    }
`

class MiddleBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MiddleBarWrapper open={this.props.open}>
                <ShareLine>
                    <ShareText open={this.props.open}>Shares</ShareText>
                    <form>
                        <ShareInput open={this.props.open} type='text' value='0'/>
                    </form>
                </ShareLine>
                <ShareLine>
                    <MarketPriceText up={this.props.up} >Market Price</MarketPriceText>
                    <PriceText open={this.props.open}>${this.props.price}</PriceText>
                </ShareLine>
                <ShareLine>
                    <PriceText open={this.props.open}>Estimated Cost</PriceText>
                    <PriceText open={this.props.open}>$0.00</PriceText>
                </ShareLine>
                <ShareLine>
                    <ExecuteCheck></ExecuteCheck>
                    <ExecuteMessage>This order should only execute during normal market hours.</ExecuteMessage>
                </ShareLine>
                <CenterLine>
                    <ReviewButton>Review Order</ReviewButton>
                </CenterLine>
            </MiddleBarWrapper>
        )
    }
}

export default MiddleBar;

