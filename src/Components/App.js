
import {useState, React, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import axios from '../Api/axios.js'

function App() {
  //local storage handlers
  const LOCAL_STORAGE_KEY = "contacts";
  const localStorageReference = () => localStorage.getItem(LOCAL_STORAGE_KEY);
  const [contacts, setContacts] = useState([]);

  //useNavigate passed through AddContactWrapper
  //due to deprecated class componenet support.
  // const nav = useNavigate();

  //request
  const requestContactsApi = async () => {
    const response = await axios.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
    let newId = await localStorageReference("initialId")
    const request = {
      id: newId,
      ...contact
    }

    const response = await axios.post("/contacts", request);
    setContacts([...contacts, response.data]);

  }

  const filterContactHandler = async (id) => {
    await axios.delete(`/contacts/${id}`);

    //forEach contact that is !== id, create new contacts, set new contacts
    const copyContactsList = contacts.filter((contact) => contact.id !== id)
    setContacts(copyContactsList);
  }
  
  //render api
  useEffect(() => {
    // const getLocalStorageContacts = JSON.parse(localStorageReference);
    // if (getLocalStorageContacts) setContacts(getLocalStorageContacts);

    const getContacts = async () => {
      const requestedContacts = await requestContactsApi();
      if (requestedContacts) setContacts(requestedContacts)
    }
    getContacts();

  }, []);
  
  useEffect(() => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)), [contacts]);

  return (
    <div className="container">
      <Router>
        <Header />

        <Routes>
          <Route path="/add" element={
            <AddContact addContactHandler={addContactHandler}/>
          }/>

          {/* react v6 allows element={} to supplant component without compromise.*/}
          <Route path="/" element={
            <ContactList contacts={contacts}
              localStorage={localStorageReference}
              filterOutContactId={filterContactHandler}
            />

          }/>
          <Route path="/contact/:id" element={
            <ContactDetails contacts={contacts}/>
          }/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
