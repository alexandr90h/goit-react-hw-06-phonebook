import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import types from './types';


const items = (state = [], {type,payload}) => {
switch (type) {
    case types.ADD:
        return [...state, payload];

    default:
        return state;
}
    
}
const filter = (state = "", action) => {
    return state;
}


const reduser = combineReducers({
    items, filter,
});

const store = createStore(reduser, composeWithDevTools());
export default store;