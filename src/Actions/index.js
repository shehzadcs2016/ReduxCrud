import {
  contacts,
  DeleteContact,
  getContact,
  addContacts,
  addContact
} from "./../utils/data";

export const fetchContacts = () => {
  return {
    type: "FETCH_CONTACTS",
    payload: contacts
  };
};

export const fetchContact = id => {
  const response = getContact(id);
  return {
    type: "FETCH_CONTACT",
    payload: response
  };
};

export const createContacts = formValues => {
  const response = addContacts(formValues);
  return {
    type: "CREATE_CONTACTS",
    payload: response
  };
};

export const EditContacts = (formValues, id) => {
  const response = addContact(formValues, id);
  return {
    type: "Edit_CONTACTS",
    payload: response
  };
};

export const DeleteContacts = id => {
  const response = DeleteContact(id);
  console.log(response);
  return {
    type: "DELETE_CONTACTS",
    payload: response
  };
};
