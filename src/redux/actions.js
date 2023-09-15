import { nanoid } from "nanoid";

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name: '',
      number:'',
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const setFilter = name => {
  return {
    type: "filters/setFilter",
    payload: name,
  };
};