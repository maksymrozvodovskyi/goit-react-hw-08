import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value) => {
  axios.defaults.headers.Authorization = value;
};

export const register = createAsyncThunk("auth/register", async (values) => {
  const res = await axios.post("/users/signup", values);

  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const login = createAsyncThunk("auth/login", async (values) => {
  const res = await axios.post("/users/login", values);

  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const res = await axios.post("/users/logout");

  setAuthHeader("");
});
