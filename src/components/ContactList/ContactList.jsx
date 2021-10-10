import { Button, Li, P } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getItems } from '../../redux/phonebook/phonebook-selectors';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/phonebook/phonebook-operations';

import { useEffect } from 'react';

export const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  const onClickDeleteContact = id => dispatch(deleteContact(id), [dispatch]);

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
              onClick={e => onClickDeleteContact(e.target.id)}
            >
              Delete
            </Button>
          </Li>
        ))}
      </ul>
    )
  );
};
