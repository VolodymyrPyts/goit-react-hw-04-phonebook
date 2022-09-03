import { Component } from 'react';
import { LabelStyle, ButtonStyle } from './FormAddContact.styled';
import { Box } from 'components/theme/Box';
import PropTypes from 'prop-types';
export class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onSubmit = e => {
    const { name, number } = this.state;

    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    const { onSubmit, onInputChange } = this;

    return (
      <Box width="400px">
        <form onSubmit={onSubmit}>
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
  }
}
