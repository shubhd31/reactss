import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./components/Home/Home";
import ContactUS from "./components/ContactUS/ContactUS";
import AboutUS from "./components/AboustUs";
import "./index.css";
import Blog from "./components/blog";
import Notfound from "./components/Notfound/Notfound";
// import reportWebVitals from './reportWebVitals';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContactUS" element={<ContactUS />}></Route>
      <Route path="/AboutUS" element={<AboutUS />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
