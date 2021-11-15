import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true ?? process.env.NODE_ENV === "development",
});

export default store;
