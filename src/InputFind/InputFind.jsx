import styles from './inputFind.module.scss';
import PropTypes from 'prop-types';

export default function InputFind(props) {
    const hendlInputFilter = e => {
        props.onChangeFind(e.currentTarget.value)
    }
    return (
            <div className={styles.inputContainer}>
                <label>Find contacts by name
                    <input type="text"
                        autoComplete="off"
                    onChange={hendlInputFilter} 
                    />
                </label>
            </div>
        )
};
InputFind.propTypes = {
    onChangeFind:PropTypes.func,
}