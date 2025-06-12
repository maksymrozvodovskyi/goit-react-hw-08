import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./filters/slice";
import contactSliceReducer from "./contacts/slice";
import authSliceReducer from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedAuthReducer = persistReducer(
  {
    key: "token",
    storage,
    whitelist: ["token"],
  },
  authSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters: filterSliceReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
