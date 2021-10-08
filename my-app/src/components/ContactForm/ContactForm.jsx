import React, { useState } from 'react';
import { Form, Label } from './ContactForm.styled';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { getItems } from '../../redux/phonebook/phonebook-selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(getItems);

  const dispatch = useDispatch();
  const addContact = () =>
    dispatch(actions.addContact({ name, id: uuidv4(), number }));

  const formSubmit = e => {
    e.preventDefault();

    const isInList =
      items.length > 0
        ? items.some(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
          )
        : false;

    isInList ? alert(name + ' is already in contacts.') : addContact();

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={formSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>

      <Label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
};
