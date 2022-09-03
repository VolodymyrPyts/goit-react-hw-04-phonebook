import { Component } from 'react';
import shortid from 'shortid';
import { Box } from 'components/theme/Box';

import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactCard } from './ContactCard/ContactCard';
import { FilterContact } from './FilterContact/FilterContact';

import { TitleStyle } from './FormAddContact/FormAddContact.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = (contact, number) => {
    let newContact = {
      id: shortid.generate(),
      contact,
      number,
    };

    this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.contact.toLowerCase()
    )
      ? alert(`${newContact.contact} is already exist in your contacts!`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            {
              id: shortid.generate(),
              name: contact,
              number,
            },
          ],
        }));
  };

  onDelete = c => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.name !== c),
    });
  };

  FilterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const oldStatyContacts = prevState.contacts;
    const newStatyContacts = this.state.contacts;

    if (newStatyContacts !== oldStatyContacts) {
      localStorage.setItem('contacts', JSON.stringify(newStatyContacts));
    }
  }

  componentWillUnmount() {
    console.log(this.componentWillUnmount);
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const vizibleContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <TitleStyle>Phonebook </TitleStyle>
        <Box display="flex" height="100vh" width="100vw">
          <Box mr="80px" pl="20px">
            <Box as="h2" mb="12px">
              Add new contacts
            </Box>
            <FormAddContact onSubmit={this.onSubmitForm} />
          </Box>
          <Box pl="20px" width="400px">
            <Box as="h2" mb="12px">
              Contacts
            </Box>
            <FilterContact value={filter} onChange={this.FilterContact} />

            <ContactCard
              contacts={vizibleContacts}
              onRemoveClick={this.removeContact}
            />
          </Box>
        </Box>
      </>
    );
  }
}
