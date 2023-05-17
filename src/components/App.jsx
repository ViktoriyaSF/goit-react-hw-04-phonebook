import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { Layout } from './Layout/Layout';
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const getinitialContacts = () => {
  const contactsLocal = localStorage.getItem('contacts');
  const parseContacts = JSON.parse(contactsLocal);
  if (parseContacts?.length) {
    return parseContacts;
  } else {
    return initialContacts;
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getinitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`You already have ${name} in your contacts`);
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };
  const filterChange = evt => {
    const { value } = evt.target;
    setFilter(value.trim());
  };
  const getVisibleContacts = () => {
    const NormaCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(NormaCase)
    );
  };
  const delContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactList contacts={getVisibleContacts()} onDelContact={delContact} />

      <GlobalStyle />
    </Layout>
  );
};
