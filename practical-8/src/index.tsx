import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./components/Home/Home";
// import ContactUS from "./components/ContactUS/ContactUS";
import SignUp from "./components/SignUp/SignUp";
import User from "./components/LoggedUser/User";
import "./index.css";
import SignIn from "./components/SignIn/SignIn";
import Notfound from "./components/Notfound/Notfound";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  </Provider>,

  document.getElementById("root")
);
