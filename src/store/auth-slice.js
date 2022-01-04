import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    onLogin(state) {
      state.isAuthenticated = true;
    },

    onLogout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
