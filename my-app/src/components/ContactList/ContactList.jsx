import { Button, Li, P } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { getFilter, getItems } from '../../redux/phonebook/phonebook-selectors';

export const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

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
              onClick={e => dispatch(actions.deleteContact(e.target.id))}
            >
              Delete
            </Button>
          </Li>
        ))}
      </ul>
    )
  );
};
