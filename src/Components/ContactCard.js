import React from 'react'
// import { useState } from 'react'
import { TiTrash } from 'react-icons/ti'

const ContactCard = ({ contact, index, contacts }) => {

  return (
    <div className="contact-card"
        style={{marginLeft: `${(index*2)}rem`}}> {/* each card has spacing according to id position*/}
      <div className="contact-card-content">
        <header className="contact-card-header"> {contact.name} </header>
        <div className="contact-card-email"> {contact.email} </div>
        <div className="contact-card-footer">
          <TiTrash onClick={() => {
            //splice contact, may need to change depending on db
            contacts.splice(index, 1)

            //need to remove browser card as well
            console.log(contacts);
          }}/>
        </div>
      </div>
    </div>
  )
}

export default ContactCard