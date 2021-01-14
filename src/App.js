import styles from './app.module.scss';
import InputMainForm from './InputMainForm/InputMainForm';
import ContactsList from './ContactsList/ContactsList.jsx';
import InputFind from './InputFind/InputFind';
import FilterContactsList from './InputFind/FilterContactsList.jsx';
import { useEffect, useState } from 'react';

export default function App() {
    const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts'))??[]);
    const [filterName, setFilterName] = useState('');

  const formSubmitHandler = data => {
    if (contacts.find(obj => obj.name.toLowerCase() === data.name.toLowerCase())===undefined) {
      setContacts(prev => prev.concat(data))
    }
    else alert(`${data.name} is alreadyin contacts.`);
  }
  const inpFindChangHandler = data => {
    setFilterName(prev => prev = data);
  }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts,filterName]);
  
    return (
      <div className={styles.mainContainer}>
        <h1>Phonebook</h1>
        <div>
          <InputMainForm onSubHand={formSubmitHandler} />
        </div>
        <div>
          <h2>Contacts</h2>
                  <InputFind onChangeFind={inpFindChangHandler} />
          {filterName === ''
            ?
            <ContactsList
              stateData={contacts}
            />
            :
            <FilterContactsList
              stateData={contacts}
              changeFilter={filterName}
            />
          }
        </div>
    </div>
    )
};
