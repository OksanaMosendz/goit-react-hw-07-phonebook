import { createAsyncThunk } from '@reduxjs/toolkit';

import * as phonebookAPI from '../../services/phonebook-API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const entities = await phonebookAPI.fetchContacts();
    return entities;
  },
);

export const postContact = createAsyncThunk(
  'contacts/postContacts',
  async contact => {
    const response = await phonebookAPI.postContact(contact);
    console.log(response.id);
    return response;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    // await phonebookAPI.deleteContact(id);
    console.log(id);
    return id;
  },
);
