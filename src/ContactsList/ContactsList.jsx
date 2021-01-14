import { connect } from "react-redux";
import ContactsListItem from './ContactsItem';
import styles from './conractsList.module.scss'
import contactsAction from "../redux/action.js";


function ContactsList({ stateData, onBtnDelId }) {
    return (
        <ol className={styles.contactList}>
            {stateData.map(obj => {
                return (<ContactsListItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                    onBtnDelId={onBtnDelId}
                />)
            })}
        </ol>
    )
}
const mapStateToProps = state => ({
stateData:state.items,
});
const mapDispatchToProps = dispatch => ({
    onBtnDelId:(id)=>dispatch(contactsAction.delContacts(id)),
});
export default connect(mapStateToProps,mapDispatchToProps)(ContactsList);