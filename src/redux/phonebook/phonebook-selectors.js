import { createSelector } from 'reselect';

export const getItems = state => state.contacts.items.entities;
export const getFilter = state => state.contacts.filter;
export const getFilteredContacts = createSelector(
  [getFilter, getItems],
  (filter, items) =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
