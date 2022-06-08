import React from 'react'
import { TiTrash } from 'react-icons/ti'

const ContactList = (props, event) => {

  console.log(props);

  const mapContactsToList = props.contacts.map((contact) => {
    return (
      <div className="contact-card">
        <div className="contact-card-ontent">
          <header className="contact-card-header"> {contact.name} </header>
          <div className="contact-card-email"> {contact.email} </div>
        </div>
        <div className="contact-card-footer">
          <TiTrash onClick={() => console.log(contact)}/>
        </div>
      </div>
    )
  })


  return (
    <div className="contact-list">
     {mapContactsToList}
    </div>
  )
}

export default ContactList