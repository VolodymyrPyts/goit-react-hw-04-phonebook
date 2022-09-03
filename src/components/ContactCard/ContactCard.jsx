import PropTypes from 'prop-types';

import { ContactItem } from './ContactItem/ContactItem';
import { ItemStyle } from './ContactCard.styled';

export const ContactCard = ({ contacts, onRemoveClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ItemStyle key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onRemoveClick={onRemoveClick}
          />
        </ItemStyle>
      ))}
    </ul>
  );
};

ContactCard.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};
