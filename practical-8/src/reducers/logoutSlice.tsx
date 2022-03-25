// import { createSlice } from "@reduxjs/toolkit";
// const entities = {
//   name: "",
//   email: "",
//   number: "",
//   password: "",
//   confirm_password: "",
//   image: null,
// };

// const registerSlice = createSlice({
//   name: "signup",
//   initialState: entities,
//   reducers: {
//     updateVal: (state, action) => {
//       console.log(action.payload);
//       localStorage.setItem("login", JSON.stringify(action.payload));
//       return {
//         name: action.payload.name,
//         email: action.payload.email,
//         number: action.payload.number,
//         password: action.payload.password,
//         confirm_password: action.payload.confirm_password,
//         image: action.payload.image,
//       };
//     },
//   },
// });

// export default registerSlice.reducer;
// export const { updateVal } = registerSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    logout: (
      state: boolean,
      action: {
        payload: any;
        type: string;
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
        payload: any;
        type: string;
      }
    ) => {
      return {
        isLogin: action.payload,
      };
    },
  },
});

export default logoutSlice.reducer;
export const { login, logout } = logoutSlice.actions;
