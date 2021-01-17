import styles from './inputFind.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import contactsAction from "../redux/action.js";


export default function InputFind() {
    const dispatch = useDispatch();
    const resetInputFind = () => {
        dispatch(contactsAction.filterChange(''));
        document.querySelector("#btn-reset").style.color = "rgb(192, 192, 192)";
    }
    const hendlInputFilter = e => {
        dispatch(contactsAction.filterChange(e.currentTarget.value));
        e.currentTarget.value ? document.querySelector("#btn-reset").style.color = "red" : document.querySelector("#btn-reset").style.color = "rgb(192, 192, 192)";
    }
    return (
            <div className={styles.inputContainer}>
            <label>Find contacts by name </label>
            <form className={styles.formBox}>
                <input type="text"
                    autoComplete="off"
                    onChange={hendlInputFilter} />
                <button type="reset" onClick={resetInputFind} id="btn-reset"><FiX /></button>
            </form>
            </div>
        )
};
InputFind.propTypes = {
    onChangeFind:PropTypes.func,
}