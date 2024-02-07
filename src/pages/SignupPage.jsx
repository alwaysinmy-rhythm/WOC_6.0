import React from 'react';
import './LoginPage.css'
import { Link } from 'react-router-dom';
import {useState} from 'react' ;
import axios from 'axios'
// import { Error } from 'mongoose';


export const SignupPage = () => {
	const [Firstname,setFname] = useState(''); 
	const [Lastname,setLname] = useState(''); 
	const [Email,setEmail] = useState(''); 
	const [Password,setPass] = useState(''); 
	const [Bdate,setBdate] = useState(''); 
	const [Gender,setGender] = useState(''); 
	const [Add_street,setAdd_Street] = useState(''); 
	const [Add_city,setAdd_City] = useState(''); 
	const [Add_state,setAdd_State] = useState(''); 
	const [Add_zip,setAdd_Zip] = useState(''); 

	const handleSubmit = (e)=>{
		e.preventDefault(); 
		axios.post('http://localhost:3001/Signup' , {Firstname , Lastname, Email, Password , Bdate, Gender,Add_street,Add_city,Add_state,Add_zip})
		.then(result => console.log(result))
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
						<span>First Name</span><input type="text" placeholder='' name='FirstName' onChange={(e)=>setFname(e.target.value)}/>
					</div>

					<div className='inputGrp'>
						<span>Last Name</span><input type="text" placeholder='' name='LastName' onChange={(e)=>setLname(e.target.value)}/>
					</div>

					<div className='inputGrp'>
						<span>Email ID</span><input type='email' placeholder='abc@gmail.com' name='Emailid' onChange={(e)=>setEmail(e.target.value)} />
					</div>

					<div className='inputGrp'>
						<span>Password</span><input type="Password" placeholder='Password' name='Password' onChange={(e)=>setPass(e.target.value)}/>
					</div>

					<div className='inputGrp'>
						<span>Birth Date</span><input type="Date" name='Birthdate' onChange={(e)=>setBdate(e.target.value)}/>
					</div>

					<div className='inputGrp'>
						<span>Gender</span>
						<select id="gender" name="Gender" onChange={(e)=>setGender(e.target.value)}>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Other">Other</option>
							<option value="NOTA">Prefer not to Say</option>
						</select>
					</div>

					<div className='inputGrp'>
						<span id='address'>Address</span>

						<input type="text" placeholder='Street' name='address.street' onChange={(e)=>setAdd_Street(e.target.value)}/>
						<input type="text" placeholder='City' name='address.city' onChange={(e)=>setAdd_City(e.target.value)}/>
						<input type="text" placeholder='State' name='address.state' onChange={(e)=>setAdd_State(e.target.value)}/>
						<input type="text" placeholder='Zip Code' name='address.zip' onChange={(e)=>setAdd_Zip(e.target.value)}/>

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