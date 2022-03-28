import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    logout: (
      state: boolean,
      action: {
        payload: PayloadAction<string>;
      }
    ) => {
      localStorage.clear();
      return {
        isLogin: action.payload,
      };
    },
    login: (
      state: boolean,
      action: {
        payload: PayloadAction<string>;
      }
    ) => {
      return {
        isLogin: action.payload,
      };
    },
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
