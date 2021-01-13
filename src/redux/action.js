import { v4 as uuidv4 } from 'uuid';

import types from './types';

const addContacts = value => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        value,
    }
})

export default addContacts;