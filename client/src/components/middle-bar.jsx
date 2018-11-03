import React from 'react';
import styled from 'styled-components';

const rhBlack = '#1b1b1d';
const rhGreen = '#21ce99';
const rhOrange = '#f45531';

const MiddleBarWrapper = styled.div`
    border: 1px solid black;
    width: 228px;
    background: ${props => props.open ? 'white' : '#1b1b1d'}
    border: 1px solid ${props => props.open ? 'rgb(224, 224, 224)' : 'black'};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? 'whitesmoke' : 'black'};
`;

const Text13Div = styled.div`
    font-size: 13px;
    font-weight: 400;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
`;

const ShareLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 48px;
`;

const CenterLine = styled(ShareLine)`
    justify-content: center;
`;

const ShareText = styled(Text13Div)`
    margin-right: 5px;
    padding-left: 10px;
    padding-right: 10px;
    color : ${props => props.open ? "black" : "white"};
`;

const PriceText = styled(ShareText)`
    font-weight: 600;
`;

const ShareInput = styled.input`
    text-align: right;
    width: 40px;
    border:1px solid ${props => props.open ? '#fafafa' : 'black'} ;
    background: ${props => props.open ? '#fafafa' : 'black'};
    color: ${props => props.open ? '#8c8c8e' : '#8c8c8e'}; 
    border-radius: 2px;
    padding-right: 5px;
    margin-right: 10px;
    margin-bottom: 4px;
    &:focus {
      border-color:${props => props.up ? rhGreen : rhOrange} !important;
      outline: none
    }
    ${ShareLine}: hover & {
        border-color: ${props => props.open ? '#cbcbcd' : '#8c8c8e'};
    };
    pointer-events: ${props => props.error ? 'none' : 'auto'};
`

const MarketPriceText = styled(ShareText)`
    color: ${props => props.up ? rhGreen : rhOrange};
    font-weight: 600; 
`

const ExecuteCheck = styled.button`
    background-color: ${props => props.up ? rhGreen : rhOrange};
    border: none;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 3px;
    margin-left:3px;
    display: inline-block;
`;

const ExecuteMessage = styled(Text13Div)`
    color: #cbcbcd;
    margin-left: 10px;
`;

const ReviewButton = styled(ExecuteCheck)`
    color: black;
    padding: 10px 52px;
    &:hover {
        background-color: ${props => props.up ? '#1ae9aa' : '#ff6340'};
    };
`;

class ShareInputComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  render() {
    return (
      <ShareInput error={this.props.error} clicked={this.state.clicked} open={this.props.open} up={this.props.up} placeholder={0} />
    )
  }
}

class ExecuteCheckComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ShareLine>
        <ExecuteCheck up={this.props.up}>✓</ExecuteCheck>
        <ExecuteMessage up={this.props.up}>This order should only execute during normal market hours.</ExecuteMessage>
      </ShareLine>
    )
  }
}

class MiddleBar extends React.Component {
  constructor(props) {
    super(props)
  }
  updateShares(e) {
    this.props.updateState({ shares: e.target.value })
  }

  reviewClickHandler() {
    if (this.props.shares <= 0) {
      return this.props.updateState({ error: 'invalidNumber' });
    }
    if (this.props.balance < this.props.price * this.props.shares) {
      this.props.updateState({ error: 'lackOfFunds' })
    }
    else {
      alert('go to purchase page')
    }
  }
  backClickHandler() {
    console.log('back handler')
    this.props.updateState({ error: false })
  }

  render() {
    if (this.props.error === 'lackOfFunds') {
      var button = null
    } else {
      if (this.props.error) {
        var button = (<CenterLine><ReviewButton onClick={this.backClickHandler.bind(this)} up={this.props.up}>Back</ReviewButton></CenterLine>)
      } else {
        var button = (<CenterLine><ReviewButton up={this.props.up} onClick={this.reviewClickHandler.bind(this)}>Review Order</ReviewButton></CenterLine>)
      }
    }

    let executeCheckComp = this.props.open ? null : <ShareLine><ExecuteCheckComp up={this.props.up} /></ShareLine>
    return (
      <MiddleBarWrapper open={this.props.open}>
        <ShareLine>
          <ShareText open={this.props.open}>Shares</ShareText>
          <form onChange={this.updateShares.bind(this)}>
            <ShareInputComp error={this.props.error} up={this.props.up} open={this.props.open} type='text' placeholder='0' />
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
        {executeCheckComp}
        {button}
      </MiddleBarWrapper>
    )
  }
}

export default MiddleBar;
