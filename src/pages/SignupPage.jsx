import React from 'react';
import './LoginPage.css'
import Navbar from './Navbar';
import './Navbar_style.css';
import { Link } from 'react-router-dom';
import {useState} from 'react' ;
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookies from 'js-cookie';



export const SignupPage = () => {
	const [FirstName,setFname] = useState(''); 
	const [LastName,setLname] = useState(''); 
	const [EmailId,setEmail] = useState(''); 
	const [Password,setPass] = useState(''); 
	const [Gender,setGender] = useState(''); 
	const [Add_street,setAdd_Street] = useState(''); 
	const [Add_city,setAdd_City] = useState(''); 
	const [Add_state,setAdd_State] = useState(''); 
	const [Add_zip,setAdd_Zip] = useState(''); 

	const handleSubmit = async (e)=>{
		e.preventDefault(); 
		axios.post('http://localhost:3001/Signup' , {FirstName , LastName, EmailId, Password , Gender,Add_street,Add_city,Add_state,Add_zip})
		.then(result => {
				if(result.data === 'Emailid Already Exist'){
					alert('EmailId is already registered');
				}
				else{
					cookies.set('email', EmailId, {expires:7});
					alert("Registered Successfully"); 
					
				} 
		})
		.catch (error=>console.log(error));
	}
	return (
		<div id='body_div'>
			<div className="div_form">
				<div id="heading">
					<h1>Sign Up to IRCTC</h1>
				</div>
				<form method='POST' onSubmit={handleSubmit} id='LoginForm'>
					<div className='inputGrp'>
						<span>First Name</span><input type="text" placeholder='' name='FirstName' value={FirstName} onChange={(e)=>setFname(e.target.value)}/>
					</div>

					<div className='inputGrp'>
						<span>Last Name</span><input type="text" placeholder='' name='LastName' value={LastName}  onChange={(e)=>setLname(e.target.value)}/>
					</div>

					<div className='inputGrp'>
						<span>Email ID</span><input type='email' placeholder='abc@gmail.com' name='EmailId' value={EmailId} onChange={(e)=>setEmail(e.target.value)} />
					</div>

					<div className='inputGrp'>
						<span>Password</span><input type="Password" placeholder='Password' name='Password' value={Password} onChange={(e)=>setPass(e.target.value)}/>
					</div>

					{/* <div className='inputGrp'>
						<span>Birth Date</span><input type="Date" name='Birthdate' onChange={(e)=>setBdate(e.target.value)}/>
					</div> */}

					<div className='inputGrp'>
						<span>Gender</span>
						<select id="gender" name="Gender" value={Gender} onChange={(e)=>setGender(e.target.value)}>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Other">Other</option>
							<option value="NOTA">Prefer not to Say</option>
						</select>
					</div>

					<div className='inputGrp'>
						<span id='address'>Address</span>

						<input type="text" placeholder='Street' name='Add_street' value={Add_street} onChange={(e)=>setAdd_Street(e.target.value)}/>
						<input type="text" placeholder='City' name='Add_city' value={Add_city} onChange={(e)=>setAdd_City(e.target.value)}/>
						<input type="text" placeholder='State' name='Add_state' value={Add_state} onChange={(e)=>setAdd_State(e.target.value)}/>
						<input type="text" placeholder='Zip Code' name='Add_zip' value={Add_zip}  onChange={(e)=>setAdd_Zip(e.target.value)}/>

					</div>

					<div className='inputGrp'>
						<button id='submit' type='submit'>Register</button>
					</div>

					<div className='inputGrp'>
						Already have account?<Link to='/' id='page_link'> Login</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignupPage;