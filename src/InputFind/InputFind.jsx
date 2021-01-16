import styles from './inputFind.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import contactsAction from "../redux/action.js";


export default function InputFind() {
        const dispatch = useDispatch();
    const resetInputFind = () => {
        dispatch(contactsAction.filterChange(''));
    }
    const hendlInputFilter = e => {
        dispatch(contactsAction.filterChange(e.currentTarget.value))
    }
    return (
            <div className={styles.inputContainer}>
            <label>Find contacts by name </label>
            <form className={styles.formBox}>
                <input type="text"
                    autoComplete="off"
                    onChange={hendlInputFilter} />
                <button type="reset" onClick={resetInputFind}><FiX /></button>
            </form>
            </div>
        )
};
InputFind.propTypes = {
    onChangeFind:PropTypes.func,
}