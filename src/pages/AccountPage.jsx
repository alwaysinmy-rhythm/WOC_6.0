import React, { useState,useEffect } from 'react'
import Navbar from './Navbar';
import './Navbar_style.css';
import './AccountPage.css';
import axios from 'axios';
import Cookies from 'js-cookie';

export const AccountPage = () => {
	// const userEmail = getCookieValue('email'); // Replace with your cookie reading logic
	
	const userEmail = Cookies.get('email'); 
	const [userdetails, setdata] = useState([]);
	useEffect(() => {
        if(userEmail) {
            axios.get(`http://localhost:3001/user/${userEmail}`)
                .then(response => {
                    setdata(response.data);
                    console.log(response.data); // User data
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [userEmail]);
		
	const handleChange = (e) => {
		setdata(e.target.name = e.target.value)
		console.log(e.target.value);
	};

	return (
		<div>

			<Navbar />
			<div className="account-container">
				<h2>userdetails Page</h2>
				<div  className="form-group">
					<label htmlFor="firstName">
						First Name:
						<textarea name="firstName" value={userdetails.FirstName} onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="lastName">
						Last Name:
						<textarea name="lastName" value={userdetails.LastName} onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="email">
						Email:
						<textarea name="email" value={userdetails.EmailId} onChange={handleChange} disabled />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="age">
						Age:
						<textarea name="age" value='0' onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="address.street">
						Street:
						<textarea name="address.street" value={userdetails.Add_street} onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="address.city">
						City:
						<textarea name="address.city" value={userdetails.Add_city} onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="address.state">
						State:
						<textarea name="address.state" value={userdetails.Add_state} onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="address.zip">
						ZIP Code:
						<textarea name="address.zip" value={userdetails.Add_zip} onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="gender">
						Gender:
						<textarea name="gender" value={userdetails.Gender} onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<img src={userdetails.userdetailsPic} alt="userdetails" />
				</div>
				<div className="form-group">
					<button>Update</button>
				</div>
			</div>
		</div>
	)
}


export default AccountPage; 
