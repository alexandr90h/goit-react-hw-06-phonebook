import { v4 as uuidv4 } from 'uuid';

import types from './types';

const addContacts = text => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        text,
    }
})

export default addContacts;