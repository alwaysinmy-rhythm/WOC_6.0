import React from 'react'
import './LoginPage.css'
import SignupPage from './SignupPage.jsx';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<div id='body_div'>
			<div className="div_form">
				<div id='heading'>
					<h1>Login to IRCTC</h1>
				</div>
				<form action="POST" id='LoginForm'>
					<div className='inputGrp'>
						<span>Email ID</span><input type="text" placeholder='abc@gmail.com' />
					</div>

					<div className='inputGrp'>
						<span>Password</span><input type="Password" placeholder='Password' />
					</div>

					<div className='inputGrp'>
						<button id='submit'>Login</button>
					</div>

					<div className='inputGrp'>
						Don't have account?<Link to='SignupPage' id='page_link'> Register</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginPage;

