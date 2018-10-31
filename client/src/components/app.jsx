import React from 'react'
import TopBar from './top-bar.jsx'
import MiddleBar from './middle-bar.jsx';
import BottomBar from './bottom-bar.jsx';
import ReviewBar from './review-bar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            up: false,
            open: false,
            balance: 1000,
            price: '214.19',
            error: true
        }
    }

    updateState(newProp) {
      var x = Object.assign({}, this.state, newProp)
      console.log(x)
      //the object given to state is correct
      this.setState(Object.assign({}, this.state, newProp))
      console.log(this.state)
    }

    // componentDidMount() {
    //     const randomId = Math.ceil(Math.random() * 99);
    //     fetch(`http://localhost:3001/companies/${randomId}`)
    //         .then(res => res.json())
    //         .then(res => this.setState({
    //             // company info
    //         }))
    //         .then (()=>{})
    //         .catch(err => {console.log(err)})
    // }

  render() {
    return (
      <div>
      <TopBar up={this.state.up} open={this.state.open}/>
      <MiddleBar up={this.state.up} open={this.state.open} price={this.state.price} error={this.state.error} updateState={this.updateState.bind(this)} balance={this.state.balance}/>
      <ReviewBar up={this.state.up} open={this.state.open} error={this.state.error} />
      <BottomBar up={this.state.up} open={this.state.open} balance={this.state.balance}/>
      </div>
    )
  }
}

export default App;