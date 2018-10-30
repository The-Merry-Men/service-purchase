import React from 'react'
import TopBar from './top-bar.jsx'
import MiddleBar from './middle-bar.jsx';

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
            </div>
        )
    }
}

export default App;