import React from 'react';
import styled from 'styled-components';

const ReviewBarWrapper = styled.div `
    border: 1px solid black;
    width: 228px;
    background: ${props => props.open ? "white" : "#1b1b1d"}
    border: 1px solid ${props => props.open ? "rgb(224, 224, 224)" : "black"};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? "whitesmoke" : "black"};
`

const LeftLine = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ErrorText = styled.div `
    font-size: 13px;
    font-weight: 400;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    color : ${props => props.open ? "black" : "white"};
    white-space: pre-line;
`

const ErrorImg = styled.span `
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${props => props.open ? "black" : "white"};
    color: ${props => props.open ? "white" : "black"};
    display: inline-block;
    text-align: center;
    font-size: 11px;
    margin-right: 5px;
`

const ExecuteCheck = styled.button `
    background-color: ${props => props.up ? "#21ce99" : "#f45531"};
    border: none;
    padding: 8px;
    border-radius: 4px;
    display: inline-block;
`

const ReviewButton = styled(ExecuteCheck) `
    color: black;
    padding: 10px 52px;
    &:hover {
        background-color: ${props => props.up ? "#1ae9aa" : "#ff6340"};
    };
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

const BackButton = styled.button `
  background: none;
  border: none;
  color: ${props => props.up ? "#1ae9aa" : "#ff6340"}
`

class ReviewBar extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const errorCodes = {
      invalidNumber: 'Please enter a valid number of shares',
      lackOfFunds: `You don’t have enough buying power to buy ${this.props.shares} shares of AAPL.

      Please deposit $${(this.props.price * this.props.shares - this.props.balance).toFixed(2)} to purchase ${this.props.shares} shares at market price (5% collar included).

      Market orders on Robinhood are placed as limit orders up to 5% above the market price in order to protect customers from spending more than they have in their Robinhood account. If you want to use your full buying power of $${this.props.balance.toFixed(2)} you can place a limit order instead.`
    }

    const errorMessage = errorCodes[this.props.error];
    const errorBarMessage = this.props.error === 'invalidNumber' ? 'Error' : 'Not Enough Purchasing Power';
    
    if (this.props.error === 'lackOfFunds') {
      return (
        <ReviewBarWrapper open={this.props.open}>
          <LeftLine>
            <ErrorImg open={this.props.open}><span>!</span></ErrorImg>
            <ErrorText open={this.props.open}>{errorBarMessage}</ErrorText>
          </LeftLine>
          <LeftLine>
            <ErrorText open={this.props.open}>{errorMessage}</ErrorText>
          </LeftLine>
          <CenterLine>
            <ReviewButton up={this.props.up}>Deposit ${(this.props.price * this.props.shares - this.props.balance).toFixed(2)}</ReviewButton>
          </CenterLine>
          <CenterLine>
            <BackButton onClick={() => this.props.updateState({error: false})} up={this.props.up} >Back</BackButton>
          </CenterLine>
        </ReviewBarWrapper>
      )
    } else {
      return (null)
    }
  }
}

export default ReviewBar