import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import {useState} from 'react' ;
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookies from 'js-cookie';
import config from '../config'; 
import HomePage from './HomePage.jsx'; 
import SignupPage from './SignupPage.jsx';
import './LoginPage.css'
import Loading from './Loading.jsx'

const LoginPage = () => {
	const [EmailId,setEmail] = useState(''); 
	const [Password,setPass] = useState(''); 
	const [loading,setLoading] = useState(false); 
	const navigate = useNavigate() ; 
	axios.defaults.withCredentials = true; 
	const handleSubmit = async(e)=>{
		e.preventDefault();
		setLoading(true);
		axios.post( (config.BACKEND_API || "http://localhost:3001") +'/login' , {EmailId, Password})
		.then(result =>{
			if( result.data === 'LoginFail' ){
				alert("Invalid EmailId/Password");
			}
			else if( result.data === 'Notexist'){
				alert("Email does not Exists")
			}
			else{
				cookies.set('email', EmailId);
				// alert("Login Successfully");
				navigate("/private/HomePage");
				setLoading(false);
			}
		})
		.catch(error=>console.log(error));
	}
	return (

		<div id='body_div' >
			<div className="div_form">
				<div id='heading'>
					<h1>Login to IRCTC</h1>
				</div>
				<form method="POST" id='LoginForm' onSubmit={handleSubmit}>
					<div className='inputGrp'>
						<span className='spanstyle'>Email ID</span><input type="text" placeholder='abc@gmail.com' name='EmailId' value={EmailId} onChange={(e)=>setEmail(e.target.value)} />
					</div>

					<div className='inputGrp'>
						<span className='spanstyle'>Password</span><input type="Password" placeholder='Password' name='Password' value={Password} onChange={(e)=>setPass(e.target.value)} />
					</div>

					<div className='inputGrp'>
						<button id='submit' type='submit'>{loading ? <Loading /> : "Login"}</button>
					</div>

					<div className='inputGrp'>
						Don't have account?<Link to='SignupPage' id='page_link'> <h4>Register</h4></Link>
					</div>

					

				</form>

			</div>
		</div>
	)
}

export default LoginPage;

