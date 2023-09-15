import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

// export const addContact = (name, number) => {
//   return {
//     type: "contacts/addContact",
//     payload: {
//       id: nanoid(),
//       name: name,
//       number:number,
//     },
//   };
// };
export const addContact = createAction("contacts/addContact", (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number:number,
    },
    }
});


// export const deleteContact = contactId => {
//   return {
//     type: "contacts/deleteContact",
//     payload: contactId,
//   };
// };

export const deleteContact = createAction('contacts/deleteContact', contactId => {
  return {
    payload: contactId,
  }
})



// export const setFilter = name => {
//   return {
//     type: "filters/setFilter",
//     payload: name,
//   };
// };

export const setFilter = createAction('filters/setFilter', name => {
  return {
    payload: name,
  }
})