import { Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(actions.filterContacts(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </Label>
  );
};
