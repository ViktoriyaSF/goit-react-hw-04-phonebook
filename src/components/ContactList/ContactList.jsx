import propTypes from 'prop-types';
import React from 'react';
import { List, Item } from './ContactList.syled';
import { FiDelete } from 'react-icons/fi';

// FiDelete;
export const ContactList = ({ contacts, onDelContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name}:</p>
          <p>{number}</p>

          <button type="button" onClick={() => onDelContact(id)}>
            <FiDelete />
          </button>
        </Item>
      ))}
    </List>
  );
};
ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
