import React from 'react'
import TopBar from './top-bar.jsx'
import MiddleBar from './middle-bar.jsx';
import BottomBar from './bottom-bar.jsx';
import ReviewBar from './review-bar.jsx';
import Menu from './menu.jsx';

//const MyContext = React.createContext();
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'default',
            ticker: 'default',
            up: true,
            open: true,
            balance: 1000,
            shares: 0,
            price: '214.19',
            error: false
        }
    }

    updateState(newProp) {
      this.setState(Object.assign({}, this.state, newProp))
    }

    componentDidMount() {
      const randomId = Math.ceil(Math.random() * 99);
      fetch(`http://localhost:3001/companies/${randomId}`, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          name: data.company_name,
          ticker: data.ticker_symbol,
          up: false,
          open: true,
          balance: 1000,
          shares: 0,
          price: '214.19',
          error: false
        }) 
      })
    }

  render() {
    return (
      <div>
      <TopBar up={this.state.up} open={this.state.open} error={this.state.error} ticker={this.state.ticker}/>
      <MiddleBar up={this.state.up} open={this.state.open} price={this.state.price} error={this.state.error} updateState={this.updateState.bind(this)} balance={this.state.balance} shares={this.state.shares}/>
      <ReviewBar up={this.state.up} open={this.state.open} error={this.state.error} balance={this.state.balance} shares={this.state.shares} price={this.state.price} updateState={this.updateState.bind(this)}/>
      <BottomBar open={this.state.open} balance={this.state.balance}/>
      <Menu open={this.state.open}/>
      </div>
    )
  }
}

export default App;