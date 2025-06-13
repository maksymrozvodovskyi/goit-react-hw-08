import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value) => {
  axios.defaults.headers.Authorization = value;
};

const notifyLogout = () =>
  toast.success("Logout", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },

    // Additional Configuration
    removeDelay: 1000,
  });

const notifyRegister = () =>
  toast.success("User created successfully", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },

    // Additional Configuration
    removeDelay: 1000,
  });

const notifyLogin = () =>
  toast.success("Successful login", {
    duration: 4000,
    position: "top-right",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },

    // Additional Configuration
    removeDelay: 1000,
  });

export const register = createAsyncThunk("auth/register", async (values) => {
  const res = await axios.post("/users/signup", values);

  setAuthHeader(`Bearer ${res.data.token}`);
  notifyRegister();
  return res.data;
});

export const login = createAsyncThunk("auth/login", async (values) => {
  const res = await axios.post("/users/login", values);

  setAuthHeader(`Bearer ${res.data.token}`);
  notifyLogin();
  return res.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");

  setAuthHeader("");
  notifyLogout();
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(`Bearer ${reduxState.auth.token}`);

    const res = await axios.get("/users/current");
    return res.data;
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
