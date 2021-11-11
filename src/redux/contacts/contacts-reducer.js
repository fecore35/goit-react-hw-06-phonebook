import { combineReducers } from "redux";
import types from "./contacts-types";

const initialItems = [];

const itemsReducer = (state = initialItems, action) => {
  let newContacts = [];
  const localContacts = localStorage.getItem("phonebook");

  if (localContacts) {
    state = JSON.parse(localContacts);
  }

  switch (action.type) {
    case types.CREATE:
      newContacts = [action.payload.item, ...state];

      // ? LocalStorage - add new Contacts
      localStorage.setItem("phonebook", JSON.stringify(newContacts));

      return newContacts;

    case types.DELETE:
      newContacts = state.filter((item) => item.id !== action.payload.id);

      // ? LocalStorage - add new Contacts
      localStorage.setItem("phonebook", JSON.stringify(newContacts));

      return newContacts;

    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: "",
});
