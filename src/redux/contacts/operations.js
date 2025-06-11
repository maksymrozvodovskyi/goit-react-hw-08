import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data; // payload
    } catch {
      return thunkAPI.rejectWithValue(404);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return contactId; // payload
    } catch {
      return thunkAPI.rejectWithValue(404);
    }
  }
);

export const addContact = createAsyncThunk(
  "/contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data; // payload
    } catch {
      return thunkAPI.rejectWithValue(404);
    }
  }
);
