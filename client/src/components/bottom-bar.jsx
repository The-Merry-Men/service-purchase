import React from 'react';
import styled from 'styled-components';

// these are all the same as middle bar. should I be importing these?
const Text13Div = styled.div`
    font-size: 13px;
    font-weight: 400;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    color: ${props => props.open ? 'black' : 'white'};
`;

const BottomBarWrapper = styled.div`
    border: 1px solid black;
    width: 228px;
    background: ${props => props.open ? 'white' : '#1b1b1d'};
    border: 1px solid ${props => props.open ? 'rgb(224, 224, 224)' : 'black'};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? 'whitesmoke' : 'black'};
    padding-top: 10px;
    padding-bottom: 10px;
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

class BottomBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BottomBarWrapper open={this.props.open} >
        <CenterLine>
          <Text13Div open={this.props.open}>
            ${this.props.balance.toFixed(2)}
            Buying Power Available
          </Text13Div>
        </CenterLine>
      </BottomBarWrapper>
    )
  }
}

export default BottomBar;
