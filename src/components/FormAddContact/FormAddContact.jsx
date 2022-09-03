import PropTypes from 'prop-types';
import { useState } from 'react';

import { LabelStyle, ButtonStyle } from './FormAddContact.styled';
import { Box } from 'components/theme/Box';

export const FormAddContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const onInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('data error');
    }
  };

  return (
    <Box width="400px">
      <form onSubmit={onHandleSubmit}>
        <LabelStyle>
          <Box as="p" display="inline">
            Name
          </Box>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputChange}
          />
        </LabelStyle>
        <LabelStyle>
          <Box as="p" display="inline" mr="auto">
            Namber
          </Box>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputChange}
          />
        </LabelStyle>
        <ButtonStyle type="submit">Add new Contact</ButtonStyle>
      </form>
    </Box>
  );
};

FormAddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
