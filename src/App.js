import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'




function App() {
    return (
		<Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/SignupPage" element={<SignupPage />} />
            </Routes>
        </Router>

    );


}
export default App;
