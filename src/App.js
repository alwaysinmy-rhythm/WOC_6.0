import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './IRCTC-Black.svg';
import './App.css';

import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AccountPage from './pages/AccountPage.jsx'
import PrivateRoute from './pages/Protect.jsx';
import BookingPage from './pages/Booking.jsx'
import NotFound from './pages/NotFound.jsx';


function App() {
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
                    <Route path="/private/BookingPage" element={<BookingPage />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    );
}
export default App;
