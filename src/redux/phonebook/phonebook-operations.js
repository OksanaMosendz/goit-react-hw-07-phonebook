import * as phonebookAPI from '../../services/phonebook-API';
import * as phonebookActions from './phonebook-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(phonebookActions.fetchContactsRequest());
  try {
    const entities = await phonebookAPI.fetchContacts();
    dispatch(phonebookActions.fetchContactsSuccess(entities));
  } catch (error) {
    dispatch(phonebookActions.fetchContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(phonebookActions.addContactRequest());
  try {
    const response = await phonebookAPI.addContact(contact);
    dispatch(phonebookActions.addContactSuccess(response));
  } catch (error) {
    dispatch(phonebookActions.addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(phonebookActions.deleteContactRequest());
  try {
    await phonebookAPI.deleteContact(id);
    dispatch(phonebookActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(phonebookActions.deleteContactError(error));
  }
};
