import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReducer } from "@reduxjs/toolkit";
import contactsAction from "./action";

const items = createReducer(JSON.parse(localStorage.getItem('contacts'))??[], {
    [contactsAction.addContacts]: (state, action) => {
        if (state.find(obj => obj.name.toLowerCase() === action.payload.name.toLowerCase()) !== undefined) {
            alert(`${action.payload.name} is alreadyin contacts.`);
        }
        return [...state, action.payload];
    },
    [contactsAction.delContacts]: (state, action) => state.filter(({ id }) => id !== action.payload)
});

const filter = createReducer('', {
    [contactsAction.filterChange]: (_,action)=>action.payload
})

const reduser = combineReducers({
    items, filter,
});

const store = createStore(reduser, composeWithDevTools());
export default store;