import React from 'react';
import styled from 'styled-components';

const ReviewBarWrapper = styled.div`
    border: 1px solid black;
    width: 228px;
    background: ${props => (props.open ? 'white' : '#1b1b1d')}
    border: 1px solid ${props => (props.open ? 'rgb(224, 224, 224)' : 'black')};
    box-shadow: 1px 1px 10px 1px ${props => (props.open ? 'whitesmoke' : 'black')};
`;

const LeftLine = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const ErrorText = styled.div`
    font-size: 13px;
    font-weight: 400;
    font-family: 'DIN Pro', -apple-system, BlinkMacSystemFont, sans-serif;
    color : ${props => (props.open ? 'black' : 'white')};
    white-space: pre-line;
    margin-bottom: 5px;
    margin-left: 13px;
    margin-right: 13px;
    margin-top: 10px;
`;

const ErrorImg = styled.span`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${props => (props.open ? 'black' : 'white')};
    color: ${props => (props.open ? 'white' : 'black')};
    display: inline-block;
    text-align: center;
    font-size: 11px;
    margin-bottom: 5px;
    margin-left: 12px;
    margin-top: 10px;
`;

const ExecuteCheck = styled.button`
    background-color: ${props => (props.up ? '#21ce99' : '#f45531')};
    border: none;
    padding: 8px;
    border-radius: 4px;
    display: inline-block;
`;

const ReviewButton = styled(ExecuteCheck)`
    color: black;
    padding: 10px 52px;
    &:hover {
        background-color: ${props => (props.up ? '#1ae9aa' : '#ff6340')};
    };
`;

const ShareLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const CenterLine = styled(ShareLine)`
    justify-content: center;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.up ? '#1ae9aa' : '#ff6340')}
  height: 48px;
`;

class ReviewBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      up, open, balance, shares, price, error, updateState,
    } = this.props;
    const errorCodes = {
      invalidNumber: 'Please enter a valid number of shares',
      lackOfFunds: `You don’t have enough buying power to buy ${shares} shares of AAPL.

      Please deposit $${(price * shares - balance).toFixed(2)} to purchase ${shares} shares at market price (5% collar included).

      Market orders on Robinhood are placed as limit orders up to 5% above the market price in order to protect customers from spending more than they have in their Robinhood account. If you want to use your full buying power of $${balance.toFixed(2)} you can place a limit order instead.`,
    };

    const errorMessage = errorCodes[error];
    const errorBarMessage = error === 'invalidNumber' ? 'Error' : 'Not Enough Purchasing Power';

    if (error === 'invalidNumber') {
      return (
        <ReviewBarWrapper open={open}>
          <LeftLine>
            <ErrorImg open={open}><span>!</span></ErrorImg>
            <ErrorText open={open}>{errorBarMessage}</ErrorText>
          </LeftLine>
          <LeftLine>
            <ErrorText open={open}>{errorMessage}</ErrorText>
          </LeftLine>
        </ReviewBarWrapper>
      )
    }

    if (error === 'lackOfFunds') {
      return (
        <ReviewBarWrapper open={open}>
          <LeftLine>
            <ErrorImg open={open}><span>!</span></ErrorImg>
            <ErrorText open={open}>{errorBarMessage}</ErrorText>
          </LeftLine>
          <LeftLine>
            <ErrorText open={open}>{errorMessage}</ErrorText>
          </LeftLine>
          <CenterLine>
            <ReviewButton up={up}>Deposit ${(price * shares - balance).toFixed(2)}</ReviewButton>
          </CenterLine>
          <CenterLine>
            <BackButton onClick={() => updateState({ error: false })} up={up}>Back</BackButton>
          </CenterLine>
        </ReviewBarWrapper>
      );
    }
    return null;
  }
}

export default ReviewBar;
