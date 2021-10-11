import { Button, Li, P } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/phonebook/phonebook-operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    filteredContacts.length > 0 && (
      <ul>
        {filteredContacts.map(contact => (
          <Li key={contact.id}>
            <P>
              {contact.name}:{contact.number}
            </P>
            <Button
              id={contact.id}
              type="button"
              onClick={e => dispatch(deleteContact(e.target.id), [dispatch])}
            >
              Delete
            </Button>
          </Li>
        ))}
      </ul>
    )
  );
};
