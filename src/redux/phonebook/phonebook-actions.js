import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phoneBook/addContact');
export const deleteContact = createAction('phoneBook/deleteContact');
export const filterContacts = createAction('phoneBook/filterContacts');
