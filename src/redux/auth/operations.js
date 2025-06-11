import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk("auth/register", async (values) => {
  const res = await axios.post("/users/signup", values);
  return res.data;
});

export const login = createAsyncThunk("auth/login", async (values) => {
  const res = await axios.post("/users/login", values);
  return res.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {});
