import React from 'react'

class NameTopBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='top-bar' className='open'>
                <div id='buy'>Buy {this.props.ticker}</div>
                <div id='threedots'>
                <span className='dot'></span>
                <span className='dot'></span>
                <span className='dot'></span>
                </div>
            </div>
        )   
    }
}

export default NameTopBox;