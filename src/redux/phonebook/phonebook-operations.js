import { createAsyncThunk } from '@reduxjs/toolkit';

import * as phonebookAPI from '../../services/phonebook-API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const entities = await phonebookAPI.fetchContacts();
    console.log(entities);
    return entities;
  },
);

export const postContact = createAsyncThunk(
  'contacts/postContacts',
  async contact => {
    const response = await phonebookAPI.postContact(contact);
    console.log(response);
    return response;
  },
);
