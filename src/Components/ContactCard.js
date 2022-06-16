import React from 'react'
import { Link } from 'react-router-dom'
import { TiTrash } from 'react-icons/ti'

const ContactCard = ({ contact, contacts, checkId}) => {

  //   //universal contacts search via ID
  // const findById = contacts.find( ({id}) => id === contact.id );

  return (
    <div className="contact-card">
        <div className="contact-card-content">

          <header className="contact-card-header">
             {/*need to access route state here */}
            <Link to={`/contact/${contact.id}`}>
              <h4>{contact.name}</h4>
            </Link>
          </header>

          <div className="contact-card-email"> {contact.email} </div>
          <div className="contact-card-footer">
          <h5>Edit</h5>

          <TiTrash className={`trash-icon`} onClick={() => {
            //give this contact.id to checkId prop, execute filterout of this id
            checkId(contact.id);
          }} style={{transform: `scale(1.5)`}}/>

        </div>
      </div>
    </div>
  )
}

export default ContactCard