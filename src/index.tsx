import * as React from "react";
import * as ReactDOM from 'react-dom';
import Home from './components/Home/Home'
// import ContactUS from './components/ContactUS/ContactUS'
import UsersList from './components/Users/UsersList'
import AboutUS from './components/AboutUs/AboustUs'
import './index.css';
import Todo from './components/To-do/Todo';
import App from './App';
import Notfound from './components/Notfound/Notfound'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../src/app/store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Users" element={<UsersList />} >
                </Route><Route path="/AboutUS" element={<AboutUS />} />
                <Route path="/Todo" element={<Todo />} />
                <Route path="/*" element={<Notfound />} />

            </Routes>
        </Router>,
    </Provider>,

    document.getElementById('root')
);