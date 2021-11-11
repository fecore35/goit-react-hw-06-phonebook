import types from "./contacts-types";

export const createContact = (item) => ({
  type: types.CREATE,
  payload: { item },
});

export const deleteContact = (id) => ({
  type: types.DELETE,
  payload: { id },
});
