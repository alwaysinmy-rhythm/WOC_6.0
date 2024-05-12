import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar_style.css';
import './AccountPage.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import config from '../config'; 

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export const AccountPage = () => {
	const [viewpass, setViewPass] = useState(false);
	const [userdetails, setdata] = useState([]);
	const userEmail = Cookies.get('email'); 
	const navigate = useNavigate() ; 
	useEffect(()=>{
		axios.get( (config.BACKEND_API || "http://localhost:3001")+ `/user/${userEmail}`)
			.then(res =>{
				console.log(res.data);
				setdata(res.data);
			})
			.catch(err=>{
				console.error('Failed to fetch data', err);
			})
		
	}, [userEmail]) // whenever userEmail changes this hook will run to fetch the details. 
	

	const handleChange = (e) => {
		setdata({ ...userdetails, [e.target.name]: e.target.value }); // userdetails destructured to array elements and name and value updated.
	};

	const handleupdate = async (e)=>{
		e.preventDefault();
		console.log(userdetails);
		axios.post( (config.BACKEND_API || "http://localhost:3001") + '/update_profile' ,{userdetails} )
		.then(res=>{
				console.log('user data update successfully');
				alert('Upadated Successfully');
				console.log(res.data);
			})
			.catch(err=>{
				console.log('some error in data updation');
				console.log(err);
			})
	}

	const handlelogout = ()=>{
		Cookies.remove('email');
		console.log("cookies removed");
		navigate("/");
	}
	return (
		<div>

			<Navbar />
			<div className="account-container">
				<h2>USER DETAILS</h2>

				<form method='POST'  onSubmit={handleupdate} id='LoginForm'>
					<div className='inputGrp'>
						<span>First Name</span><input type="text" placeholder='' name='FirstName' value={userdetails.FirstName} onChange={handleChange}/>
					</div>

					<div className='inputGrp'>
						<span>Last Name</span><input type="text" placeholder='' name='LastName' value={userdetails.LastName}  onChange={handleChange}/>
					</div>

					<div className='inputGrp'>
						<span>Email ID</span><input type='email' placeholder='abc@gmail.com' name='EmailId' value={userdetails.EmailId} onChange={handleChange} />
					</div>

					<div className='inputGrp'>
						<span>Password</span>
						
						<div  style={{display:'flex', width:'100%'}}>
							<input type={viewpass ? 'text' : 'password'} placeholder='Password' name='Password' value={userdetails.Password} onChange={handleChange} style={{marginRight:"-40px"}}/>
							<div onClick={() => setViewPass(!viewpass)} >{viewpass ? <VisibilityIcon/>:<VisibilityOffIcon/>}</div>
						</div>
						
					</div>

					{/* <div className='inputGrp'>
						<span>Birth Date</span><input type="Date" name='Birthdate' onChange={(e)=>setBdate(e.target.value)}/>
					</div> */}

					<div className='inputGrp'>
						<span>Gender</span>
						<select id="gender" name="Gender" value={userdetails.Gender} onChange={handleChange}>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Other">Other</option>
							<option value="NOTA">Prefer not to Say</option>
						</select>
					</div>

					<div className='inputGrp' id='addinput'>
						<span id='address'>Address</span>

						<input type="text" placeholder='Street' name='Add_street' value={userdetails.Add_street} onChange={handleChange}/>
						<input type="text" placeholder='City' name='Add_city' value={userdetails.Add_city} onChange={handleChange}/>
						<input type="text" placeholder='State' name='Add_state' value={userdetails.Add_state} onChange={handleChange}/>
						<input type="text" placeholder='Zip Code' name='Add_zip' value={userdetails.Add_zip}  onChange={handleChange}/>

					</div>

					<div className='inputGrp'>
						<button id='submit' type='submit'>Update</button>
					</div>
				</form>
					<div className='inputGrp'>
						<button id='submit' type='submit' onClick= { handlelogout}>LogOut</button>
					</div>
			</div>
		</div>
	)
}


export default AccountPage; 
