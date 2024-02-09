import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import cookie from 'js-cookie'
import {useState} from 'react' ;

import logo from './logo.svg';
import './App.css';

import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AccountPage from './pages/AccountPage.jsx'
import PrivateRoute from './pages/Protect.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
    // [cookieval,setcookiesval] = useState(cookie.getItem('EmailId'));
    return (
		<Router>
            <Routes>
                {/* {cookieval == undefined &&  <Route path="/LoginPage" element={<LoginPage />} />}
                {cookieval != undefined &&  <Route path="/LoginPage" element={<AccountPage />} />} */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/SignupPage" element={<SignupPage />} />
                
                <Route path="/private" element={<PrivateRoute />} >
                    <Route path="/private/HomePage" element={<HomePage />} />
                    <Route path="/private/AccountPage" element={<AccountPage />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    );
}
export default App;
