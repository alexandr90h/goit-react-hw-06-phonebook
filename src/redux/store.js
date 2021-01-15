import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import types from './types';


const items = (state = JSON.parse(localStorage.getItem('contacts'))??[], {type, payload}) => {
switch (type) {
    case types.ADD: {
        if (state.find(obj => obj.name.toLowerCase() === payload.name.toLowerCase())!==undefined) {
            alert(`${payload.name} is alreadyin contacts.`);
        } 
        return [...state, payload];
    }
    case types.DELETE:
        return state.filter(({ id }) => id !== payload);
    default:
        return state;
}
    
}
const filter = (state = '', { type, payload }) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload;
        default:
            return state;
    }
}


const reduser = combineReducers({
    items, filter,
});

const store = createStore(reduser, composeWithDevTools());
export default store;