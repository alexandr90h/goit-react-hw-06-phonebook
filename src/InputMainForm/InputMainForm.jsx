import PropTypes from 'prop-types';
import styles from './inputMainForm.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function InputMainForm(props) {
        const schema = yup.object().shape({
        name: yup.string().required().min(3),
        number:yup.number().required().min(5),
    })

    const { register,handleSubmit,reset, errors } = useForm({resolver:yupResolver(schema)});
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
        console.log(errors);
    }
    const hendleOnSubmite = e => {
        // e.preventDefault();
       props.onSubHand({ name, number, id });
        // reset();
    }
    // const reset = () => {
    //     setName('');
    //     setNumber('');
    //     setId(uuidv4());
    // }
     return (
            <div>
            <form onSubmit={handleSubmit(hendleOnSubmite)} className={styles.mainForm}>
                <label>Name 
            <input type="text" name="name" autoComplete="off" value={name} onChange={hendleInputChanga} ref={register} />
                 </label>
                 {errors.name && <p>{errors.name.message}</p>}
                <label>Number
                     <input type="text" name="number" autoComplete="off" value={number} onChange={hendleInputChanga} ref={register}/>
                 </label>
                 {errors.number && <p>{ errors.number.message}</p>}
                <button type="submit">Add contact</button>
        </form>
            </div>
        );
};
InputMainForm.propTypes = {
    onSubHand:PropTypes.func,
}