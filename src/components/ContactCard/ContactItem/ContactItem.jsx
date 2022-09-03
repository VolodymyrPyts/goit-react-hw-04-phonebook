import PropTypes from 'prop-types';
import { Box } from 'components/theme/Box';

import { ItemSpanStyle, DelButtonStyle } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onRemoveClick }) => {
  return (
    <>
      <Box display="flex">
        <ItemSpanStyle>{name}:</ItemSpanStyle>
        <ItemSpanStyle>{number}</ItemSpanStyle>
      </Box>
      <DelButtonStyle type="button" onClick={() => onRemoveClick(id)}>
        Delete
      </DelButtonStyle>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};
