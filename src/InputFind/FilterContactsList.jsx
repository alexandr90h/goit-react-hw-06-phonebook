import ContactsListItem from '../ContactsList/ContactsItem';
import styles from '../ContactsList/conractsList.module.scss';
import PropTypes from 'prop-types';
import contactsAction from "../redux/action.js";
import { connect } from "react-redux";

function FilterContactsList({ stateData, filterName, onBtnDelId }) {
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
                    onBtnDelId={onBtnDelId}
                />)
            })}
        </ol>
    )
}

const mapStateToProps = state => ({
    stateData: state.items,
    filterName: state.filter,
})
const mapDispatchToProps = dispatch => ({
    onBtnDelId:(id)=>dispatch(contactsAction.delContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContactsList);

FilterContactsList.propTypes = {
    stateData: PropTypes.array,
    changeFilter: PropTypes.string,
    onBtnDelId:PropTypes.func,
}