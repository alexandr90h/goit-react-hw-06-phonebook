import styles from './contactsItem.module.scss';
import PropTypes from 'prop-types';

export default function ContactsListItem(props) {
    return (
        <li key={props.id} className={styles.contactItem}>
            <div className={styles.contentItem}>
                <span className={styles.nameItem}>{props.name}: </span>
                <span className={styles.phonItem}>{props.number}</span>
            </div>
            <button onClick={() => props.onBtnDelId(props.id)}>delete</button>
        </li>
    )
}
ContactsListItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
    onBtnDelId:PropTypes.func,
}