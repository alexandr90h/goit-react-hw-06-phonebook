import PropTypes from 'prop-types';
import styles from './inputMainForm.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function InputMainForm(props) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [id, setId] = useState(uuidv4());
    
    const hendleInputChanga = e => {
        switch (e.target.name) {
            case 'name': setName(e.target.value)
                break;
            case 'number': setNumber(e.target.value)
                break;
            default:
                break;
        }
    }
    const hendleOnSubmit = e => {
        e.preventDefault();
       props.onSubHand({ name, number, id });
        reset();
    }
    const reset = () => {
        setName('');
        setNumber('');
        setId(uuidv4());
    }
     return (
            <div>
            <form onSubmit={hendleOnSubmit} className={styles.mainForm}>
                <label>Name 
            <input type="text" name="name" autoComplete="off" value={name} onChange={hendleInputChanga}/>
                </label>
                <label>Number
                     <input type="text" name="number" autoComplete="off" value={number} onChange={hendleInputChanga}/>
                </label>
                <button type="submit">Add contact</button>
        </form>
            </div>
        );
};
InputMainForm.propTypes = {
    onSubHand:PropTypes.func,
}