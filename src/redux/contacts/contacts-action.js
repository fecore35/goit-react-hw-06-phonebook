import types from "./contacts-types";

export const createContact = (item) => ({
  type: types.CREATE,
  payload: { item },
});

export const deleteContact = (id) => ({
  type: types.DELETE,
  payload: { id },
});

export const changeFilter = (text) => ({
  type: types.FILTER,
  payload: { text },
});
