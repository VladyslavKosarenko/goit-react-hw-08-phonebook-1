import React from 'react';

import { useSelector } from 'react-redux';

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts.items || []);
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
