import React from 'react';
import TopBar from './top-bar.jsx';
import MiddleBar from './middle-bar.jsx';
import BottomBar from './bottom-bar.jsx';
import ReviewBar from './review-bar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: 'default',
      ticker: 'default',
      up: false,
      open: false,
      balance: 1000,
      shares: 0,
      price: 214.19,
      error: false,
      menu: false,
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const randomId = Math.ceil(Math.random() * 99);
    fetch(`/companies/${randomId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({
          ticker: data.ticker_symbol,
        });
      });
  }

  updateState(newProp) {
    this.setState(newProp);
  }

  render() {
    const {
      ticker, up, open, balance, shares, price, error, menu,
    } = this.state;
    return (
      <div>
        <button type="submit" onClick={() => this.updateState({ open: !open })}>Open/Close</button>
        <button type="submit" onClick={() => this.updateState({ up: !up })}>Up/Down</button>
        <TopBar up={up} open={open} error={error} ticker={ticker} menu={menu} clickHandler={this.updateState} />
        <MiddleBar up={up} open={open} price={price} error={error} updateState={this.updateState} balance={balance} shares={shares} />
        <ReviewBar up={up} open={open} error={error} balance={balance} shares={shares} price={price} updateState={this.updateState} />
        <BottomBar open={open} balance={balance} />
      </div>
    );
  }
}

export default App;
