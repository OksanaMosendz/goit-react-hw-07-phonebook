import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookAPI from '../../services/phonebook-API';
import * as phonebookActions from './phonebook-actions';
export const fetchContacts = () => async dispatch => {
  dispatch(phonebookActions.fetchContactsRequest());

  try {
    const entities = await phonebookAPI.fetchContacts();
    dispatch(phonebookActions.fetchContactsSuccess(entities));
  } catch (error) {
    dispatch(phonebookActions.fetchBooksError(error));
  }
};

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const entities = await phonebookAPI.fetchContacts();
//     return entities;
//   },
// );

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await phonebookAPI.addContact(contact);
    console.log(response.id);
    return response;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const isContactDeleted = await phonebookAPI.deleteContact(id);
    if (isContactDeleted) {
      return id;
    }
  },
);
