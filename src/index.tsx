import * as React from "react";
import * as ReactDOM from 'react-dom';
import Home from './components/Home/Home'
import ContactUS from './components/ContactUS/ContactUS'
import AboutUS from './components/AboutUs/AboustUs'
import './index.css';
import Todo from './components/To-do/Todo';
import App from './App';
import Notfound from './components/Notfound/Notfound'
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUS" element={<ContactUS />} >
            </Route><Route path="/AboutUS" element={<AboutUS />} />
            <Route path="/Todo" element={<Todo />} />
            <Route path="/*" element={<Notfound />} />

        </Routes>
    </Router>,

    document.getElementById('root')
);