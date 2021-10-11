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

 export const addContact = (contact)=>async dispatch=>{
   dispatch(phonebookActions.addContactRequest());
   try {
    const response = await phonebookAPI.addContact(contact);
    dispatch(phonebookActions.addContactSuccess(response));
   } catch (error) {
    dispatch(phonebookActions.addContactError());
   }
},

 export const deleteContact=()=>async dispatch=>{};


