import React from 'react';
import styled from 'styled-components';
import Menu from './menu.jsx';

const TopBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${props => (props.open ? 'white' : '#1b1b1d')}
    border: 1px solid ${props => (props.open ? 'rgb(224, 224, 224)' : 'black')};
    box-shadow: 1px 1px 10px 1px ${props => (props.open ? 'whitesmoke' : 'black')};
    height: 47px;
    width: 228px;
    align-items: center;
    font-family: 'DIN Pro', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
`;
const Buy = styled.div`
    margin-left: 12px;
    margin-top: 4px;
    font-size: 16px;
    color : ${props => (props.open ? 'black' : 'white')};
`;
const DotsWrapper = styled.div`
    margin-right: 10px;
    height: 25px;
    width: 25px;
    position: relative;
`;
const Dot = styled.span`
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background: ${props => (props.open ? 'black' : 'white')};
    display: inline-block;
    margin-right: 3px;
    margin-bottom: 3px;
    ${DotsWrapper}: hover & {
        background: ${props => (props.up ? '#21ce99' : '#f45531')};
    }
`;

const Padlock = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

class ThreeDots extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, up } = this.props;
    return (
      <div>
        <Dot open={open} up={up} />
        <Dot open={open} up={up} />
        <Dot open={open} up={up} />
      </div>
    );
  }
}

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      ticker, up, open, error, menu, clickHandler,
    } = this.props;
    const padlockColor = open ? '/images/padlock.png' : '/images/padlock-white.png';
    const dotsRender = error ? <Padlock src={padlockColor} /> : <ThreeDots open={open} up={up} />;
    const menuComponent = menu && !error ? <Menu open={open} up={up} /> : null;
    return (
      <TopBarWrapper open={open}>
        <Buy open={open}>Buy {ticker}</Buy>
        <DotsWrapper error={error} open={open} onClick={() => {
          error ? null : clickHandler({ menu: !menu })
        }}
        >
          {dotsRender}
          {menuComponent}
        </DotsWrapper>
      </TopBarWrapper>
    );
  }
}

export default TopBar;
