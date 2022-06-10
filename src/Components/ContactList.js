import React from 'react'
import ContactCard from './ContactCard'
import Carousel from 'better-react-carousel'

const ContactList = (props) => {

  //prop drill filter-out a contact by Id
  const deleteContact = props.filterOutContactId;
  //map contacts composed into individual cards
  const mapContactsToList = props.contacts.map((contact) => {
    return (

      <Carousel.Item>
        <ContactCard key={contact.name} contact={contact} contacts={props.contacts} checkId={deleteContact} />
      </Carousel.Item>
    )
  });

  return (
      <div className="contact-list">
        <Carousel cols={5} rows={1} gap={0} style={{ height: `20px`}} loop>
            {mapContactsToList}
        </Carousel>
      </div>
  )
}

export default ContactList