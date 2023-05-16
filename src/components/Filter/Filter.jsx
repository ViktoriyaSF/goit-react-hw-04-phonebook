import propTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import { LabelFilter } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { FiSearch } from 'react-icons/fi';

const idFilter = nanoid();
export const Filter = ({ value, onChange }) => {
  return (
    <LabelFilter>
      <div>
        <FiSearch />
        Find contact by name
      </div>
      <Input
        type="text"
        value={value}
        id={idFilter}
        onChange={onChange}
        placeholder="search"
      ></Input>
    </LabelFilter>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
