import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {

  //map contacts composed into individual cards
  const mapContactsToList = props.contacts.map((contact) => {
    return (
      <ContactCard key={contact.name} contact={contact} contacts={props.contacts} />
    )
  });

  return (
    <div className="contact-list">
        {mapContactsToList}
    </div>
  )
}

export default ContactList