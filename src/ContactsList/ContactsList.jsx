import { useDispatch, useSelector } from "react-redux";
import ContactsListItem from './ContactsItem';
import styles from './conractsList.module.scss'
import contactsAction from "../redux/action.js";


export default function ContactsList() {
    const stateData = useSelector(state => state.items);
    const dispatch = useDispatch();
    return (
        <ol className={styles.contactList}>
            {stateData.map(obj => {
                return (<ContactsListItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                    onBtnDelId={()=>dispatch(contactsAction.delContacts(obj.id))}
                />)
            })}
        </ol>
    )
}