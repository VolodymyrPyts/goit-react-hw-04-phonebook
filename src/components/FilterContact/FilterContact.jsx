import PropTypes from 'prop-types';
import { Box } from 'components/theme/Box';

export const FilterContact = ({ value, onChange }) => (
  <>
    <Box display="flex">
      <Box as="h3" mr="15px">
        Find contacts by name
      </Box>
      <input type="text" value={value} onChange={onChange} />
    </Box>
  </>
);

FilterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
