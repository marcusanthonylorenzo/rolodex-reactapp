import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {

  //map contacts composed into individual cards
  const mapContactsToList = props.contacts.map((contact, i) => {
    return (
      <ContactCard key={contact.name} contact={contact} index={i} contacts={props.contacts}/>
    )
  });

  return (
    <div className="contact-list">
        {mapContactsToList}
    </div>
  )
}

export default ContactList