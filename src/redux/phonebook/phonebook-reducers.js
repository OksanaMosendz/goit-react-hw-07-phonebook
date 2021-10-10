import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContacts, deleteContact } from './phonebook-actions';
import { fetchContacts, postContact } from './phonebook-operations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [postContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [postContact.pending]: () => true,
  [postContact.fulfilled]: () => false,
  [postContact.rejected]: () => false,
  // [deleteContact]: (state, { payload }) =>
  //   state.filter(item => item.id !== payload),
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [postContact.rejected]: (_, action) => action.payload,

  // [deleteContact]: (state, { payload }) =>
  //   state.filter(item => item.id !== payload),
});

const itemsReducer = combineReducers({
  entities,
  isLoading,
  error,
});

const filterReducer = createReducer('', {
  [filterContacts]: (state, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
