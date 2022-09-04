import { useEffect, useState } from 'react';
import { Box } from 'components/theme/Box';

import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactCard } from './ContactCard/ContactCard';
import { FilterContact } from './FilterContact/FilterContact';

import { TitleStyle } from './FormAddContact/FormAddContact.styled';

const CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('ContactList')) ?? CONTACTS
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('ContactList', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = newContact => {
    contacts.find(c => c.name === newContact.name)
      ? alert(`${newContact.name} already exists in contacts list.`)
      : setContacts(contacts => [newContact, ...contacts]);
  };

  const ContactFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const removeContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

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
          <FormAddContact onSubmit={onSubmitForm} />
        </Box>
        <Box pl="20px" width="400px">
          <Box as="h2" mb="12px">
            Contacts
          </Box>
          <FilterContact value={filter} onChange={ContactFilter} />
          <ContactCard
            contacts={vizibleContacts}
            onRemoveClick={removeContact}
          />
        </Box>
      </Box>
    </>
  );
};
