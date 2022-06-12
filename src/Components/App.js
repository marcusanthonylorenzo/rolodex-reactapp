
import {useState, React, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

  const filterContactHandler = (id) => {
    //forEach contact that is !== id, create new contacts, set new contacts
    const copyContactsList = contacts.filter((contact) => contact.id !== id)
    setContacts(copyContactsList);
  }
  
  //get local storage contacts by key, parse, if there are localStorageContacts, setContacts
  useEffect(() => {
    const getLocalStorageContacts = JSON.parse(localStorageReference);
    if (getLocalStorageContacts) setContacts(getLocalStorageContacts);
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))}, [contacts]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={

            <AddContact addContactHandler={addContactHandler}/>
          } />

          {/* react v6 allows element={} to supplant component without compromise.*/}
          <Route path="/" element={
            <ContactList contacts={contacts} localStorage={localStorageReference} filterOutContactId={filterContactHandler} />
          
          }/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
