
import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {

  //temporary data before creating DB
  const contacts = [
    {
      name: 'John',
      email: 'john@example.com',
      id: 1
    },
    {
      name: 'Claire',
      email: 'claire@example.com',
      id: 2
    },
    {
      name: 'Kalani',
      email: 'kalani@test.com',
      id: 3
    }
  ]

  return (
    <div className="container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
