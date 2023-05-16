import React, { Component } from 'react';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { Layout } from './Layout/Layout';
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contactsLocal);

    //  варіант коли потрібно повертати initialContacts  якщо пусто
    // перевірка якщо немає довжини
    // console.log(parseContacts.length);
    if (parseContacts?.length) {
      this.setState({ contacts: parseContacts });
      return;
    }
    this.setState({ contacts: initialContacts });

    // варіант щоб не формувала initialContacts якщо їх видалили
    //   if (parseContacts) {
    //     this.setState({ contacts: parseContacts });
    //   } else {
    //     this.setState({ contacts: initialContacts });
    //   }
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.contacts); // новий обо'єкт
    // console.log(prevState.contacts); // минулий - попереедній обо'єкт
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  //створюємо метод для додавання контактів в стейт
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`You already have ${name} in your contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  // Фільтрація
  filterChange = evt => {
    const { value } = evt.target;
    this.setState({ filter: value.trim() });
  };

  //фільтер не залежно від розміру літер
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const NormaCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(NormaCase)
    );
  };

  //видалення контакту
  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterChange} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDelContact={this.delContact}
        />

        <GlobalStyle />
      </Layout>
    );
  }
}
