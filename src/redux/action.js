import { v4 as uuidv4 } from 'uuid';

import types from './types';
const addContacts = (name, number) => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name,
        number,
    }
});
const delContacts = id => ({
    type: types.DELETE,
    payload: id,
});
const filterChange = text => ({
    type: types.CHANGE_FILTER,
    payload:text,
})
const contactsAction = { addContacts, delContacts, filterChange };
export default contactsAction;