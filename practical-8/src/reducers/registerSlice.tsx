import { createSlice } from "@reduxjs/toolkit";
const entities = {
  name: "",
  email: "",
  number: "",
  password: "",
  confirm_password: "",
  image: "",
};

const registerSlice = createSlice({
  name: "signup",
  initialState: entities,
  reducers: {
    updateVal: (state, action) => {
      localStorage.setItem("login", JSON.stringify(action.payload));
      return {
        name: action.payload.name,
        email: action.payload.email,
        number: action.payload.number,
        password: action.payload.password,
        confirm_password: action.payload.confirm_password,
        image: action.payload.image,
      };
    },
  },
});

export default registerSlice.reducer;
export const { updateVal } = registerSlice.actions;
