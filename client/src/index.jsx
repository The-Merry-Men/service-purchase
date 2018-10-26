import React from 'react'
import ReactDOM from 'react-dom'


class NameTopBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='name-top-box'>
                <div id='text-line'>
                    <p className='buy'>Buy {this.props.ticker}</p>
                    <p className='sell'>Sell {this.props.ticker}</p>
                </div>
            </div>
        )   
    }
}


ReactDOM.render(<NameTopBox ticker='SIRI'/>, document.getElementById('purchase-box'))


