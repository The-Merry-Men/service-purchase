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
    };
`

class ShareInputComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }
  render() {
    return (
      <ShareInput clicked={this.state.clicked} open={this.props.open} placeholder={0}/>
    )
  }
}

class ExecuteCheckComp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ExecuteCheck></ExecuteCheck>
        <ExecuteMessage>This order should only execute during normal market hours.</ExecuteMessage>
      </div>
    )
  }
}

class MiddleBar extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //   shares: 0
        // }
    }

    updateShares(e) {
      this.props.updateState({shares: e.target.value})
      // this.setState({
      //   shares: e.target.value
      // })
    }

    // need to add all types of errors
    reviewClickHandler() {
      if (this.props.shares <= 0) {
        return this.props.updateState({error: 'invalidNumber'})
      } 
      if (this.props.balance < this.props.price * this.props.shares) {
        this.props.updateState({error: 'lackOfFunds'})
      }
      //else go to purchase page?
    }

    backClickHandler() {
      console.log('back handler')
      this.props.updateState({error: false})
    }

    render() {
      let button = this.props.error === 'lackOfFunds'?  null : !this.props.error ? <ReviewButton onClick={this.reviewClickHandler.bind(this)}>Review Order</ReviewButton> : <ReviewButton onClick={this.backClickHandler.bind(this)}>Back</ReviewButton>
      let executeCheckComp = this.props.open ? null : <ExecuteCheckComp />
        return (
            <MiddleBarWrapper open={this.props.open}>
                <ShareLine>
                    <ShareText open={this.props.open}>Shares</ShareText>
                    <form onChange={this.updateShares.bind(this)}>
                        <ShareInputComp open={this.props.open} type='text' placeholder='0'/>
                    </form>
                </ShareLine>
                <ShareLine>
                    <MarketPriceText up={this.props.up} >Market Price</MarketPriceText>
                    <PriceText open={this.props.open}>${this.props.price}</PriceText>
                </ShareLine>
                <ShareLine>
                    <PriceText open={this.props.open}>Estimated Cost</PriceText>
                    <PriceText open={this.props.open}>{(this.props.price * this.props.shares).toFixed(2)}</PriceText>
                </ShareLine>
                <ShareLine>
                  {executeCheckComp}
                </ShareLine>
                <CenterLine>
                  {button}
                </CenterLine>
            </MiddleBarWrapper>
        )
    }
}

export default MiddleBar;
