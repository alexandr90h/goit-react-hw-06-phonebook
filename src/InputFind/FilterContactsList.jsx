import ContactsListItem from '../ContactsList/ContactsItem';
import styles from '../ContactsList/conractsList.module.scss';
import PropTypes from 'prop-types';

export default function FilterContactsList({ stateData, changeFilter, onBtnDelId }) {
    const filterArr = stateData.filter(obj => {
        return (obj.name.toLowerCase().includes(changeFilter.toLowerCase()))
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
FilterContactsList.propTypes = {
    stateData: PropTypes.array,
    changeFilter: PropTypes.string,
    onBtnDelId:PropTypes.func,
}