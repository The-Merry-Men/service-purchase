import React from 'react'
import TopBar from './top-bar.jsx'
import MiddleBar from './middle-bar.jsx';
import BottomBar from './bottom-bar.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            up: false,
            open: false
        }
    }
    render() {
        return (
            <div>
            <TopBar up={this.state.up} open={this.state.open}/>
            <MiddleBar up={this.state.up} open={this.state.open} price={214.88}/>
            <BottomBar up={this.state.up} open={this.state.open} balance={0.00}/>
            </div>
        )
    }
}

export default App;