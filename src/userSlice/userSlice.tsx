import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getUsersAPI from "./getUsersAPI";
import { interfaceUsers } from "./types";

//our initial state
const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
} as interfaceUsers;

//get users

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const users = await getUsersAPI.getUsersAPI();
  return await users;
});

//create our slice

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.users = [];
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  // A way to add extra reducers to our slice
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

//export reducer
export const { reset } = userSlice.actions;
export default userSlice.reducer;
