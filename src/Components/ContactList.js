import React from 'react'
import ContactCard from './ContactCard'
import Carousel from 'better-react-carousel'

const ContactList = (props) => {

  //prop filter-out a contact by Id
  const deleteContact = props.filterOutContactId;

  //map contacts composed into individual cards
  const mapContactsToList = props.contacts.map((contact) => {
    return (

      <Carousel.Item key={contact.id}>
        <ContactCard key={contact.name} contact={contact} contacts={props.contacts} checkId={deleteContact} />
      </Carousel.Item>
    )
  });

  // const MyDot = ({ isActive }) => (
  //   <span
  //     style={{
  //       display: 'inline-block',
  //       height: isActive ? '8px' : '5px',
  //       width: isActive ? '8px' : '5px',
  //       background: '#1890ff',
  //     }}
  //   ></span>
  // )

  return (
      <div className="contact-list">
        <Carousel cols={4} rows={1} gap={0} loop>
            {mapContactsToList}
        </Carousel>
      </div>
  )
}

export default ContactList