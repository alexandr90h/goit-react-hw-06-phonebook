import ContactsListItem from '../ContactsList/ContactsItem';
import styles from '../ContactsList/conractsList.module.scss';
import PropTypes from 'prop-types';
import contactsAction from "../redux/action.js";
import { useSelector, useDispatch } from "react-redux";

export default function FilterContactsList() {
    const stateData = useSelector(state => state.items);
    const filterName = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const filterArr = stateData.filter(obj => {
        return (obj.name.toLowerCase().includes(filterName.toLowerCase()))
    });
    return (
        <ol className={styles.contactList}>
            {filterArr.map(obj => {
                return(<ContactsListItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                    onBtnDelId={()=>dispatch(contactsAction.delContacts(obj.id))}
                />)
            })}
        </ol>
    )
}

FilterContactsList.propTypes = {
    stateData: PropTypes.array,
    changeFilter: PropTypes.string,
    onBtnDelId:PropTypes.func,
}