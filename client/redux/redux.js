import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// actions
let toggleOpen = function() {
    return {type: 'OPEN-CLOSE'}
}
let toggleUp = function() {
    return {type: 'UP-DOWN'}
}

// reducer
let reducer = function(state, action) {
    switch (action.type) {
        case 'OPEN-CLOSE':
            return Object.assign({}, state, {open : !state.open})
        case 'UP-DOWN':
            return Object.assign({}, state, {up: !state.up})
    }
}

// store
const store = createStore(reducer, {
    up: true,
    open: true
})

export default reducer;
export default store;