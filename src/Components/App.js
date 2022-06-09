
import {useState, React, useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  //local storage handlers
  const LOCAL_STORAGE_KEY = "contacts";
  const localStorageReference = localStorage.getItem(LOCAL_STORAGE_KEY);
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  //get local storage contacts by key, parse, if there are localStorageContacts, setContacts
  useEffect(() => {
    const getLocalStorageContacts = JSON.parse(localStorageReference);
    if (getLocalStorageContacts) setContacts(getLocalStorageContacts);
  }, []);
  
  //set local storage array of obj contacts in "contacts" key.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))}, [contacts]);

  return (
    <div className="container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} localStorage={localStorageReference} />
    </div>
  );
}

export default App;
