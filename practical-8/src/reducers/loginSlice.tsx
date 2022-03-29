import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    logout: (state, action: PayloadAction<boolean>) => {
      localStorage.clear();
      return action.payload;
    },
    login: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});
export default logoutSlice.reducer;
export const { login, logout } = logoutSlice.actions;
