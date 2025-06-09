import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./filters/slice";
import contactSliceReducer from "./contacts/slice";
import authSliceReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters: filterSliceReducer,
    auth: authSliceReducer,
  },
});
