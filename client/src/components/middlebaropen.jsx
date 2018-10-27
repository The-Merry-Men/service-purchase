import React from 'react';

class MiddleBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='middle-bar'>
                <div className='share-line'>
                    <div id='share-text'>Shares</div>
                    <div>
                        <form>
                            <input id='share-input' type='text' value='0'/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MiddleBar;