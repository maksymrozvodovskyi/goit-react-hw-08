import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./filters/filtersSlice";
import contactSliceReducer from "./contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters: filterSliceReducer,
  },
});
