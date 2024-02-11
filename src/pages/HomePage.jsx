import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import './Navbar_style.css';
import './HomePage.css';
import Card from './Card.jsx'

export const HomePage = () => {
	const [toStation, setToStation] = useState('');
	const [fromStation, setFromStation] = useState('');
	const [journeyDate, setDate] = useState('');
	const [trainClass, setClass] = useState('');
	const [Category, setCategory] = useState('');
	const [trainDetails, setData] = useState([[]]);
	const [isData, setisData] = useState(undefined);
	const options = {
		method: 'GET',
		url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
		params: {
			fromStationCode: fromStation,
			toStationCode: toStation,
			dateOfJourney: journeyDate
		},
		headers: {
			'X-RapidAPI-Key': '018e22e869msha6b3de57513e85bp19e748jsncf4a2cc3620d',
			'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
		}
	};



	const train_API = async () => {
		try {
			console.log(options);
			const response = await axios.request(options);
			console.log(response.data);
			setData(response.data.data)
			setisData(true);
			// console.log(trainDetails);
		} catch (error) {
			setisData(false);
			console.error(error);
		}
	}

	useEffect(() => {
		console.log(trainDetails);
	}, [trainDetails]);



	return (
		<div>
			<Navbar />

				<div className='booking_input' id='booking_input'>
					<div className='selection'>
						<label htmlFor="from">FROM</label>
						<input type="text" list='city' name='from' value={fromStation} onChange={(e) => { setFromStation(e.target.value) }} required />
					</div>
					{/* <button id='shift'></button> */}
					<div className='selection'>
						<label htmlFor="to">TO</label>
						<input type="text" list='city' name='to' value={toStation} onChange={(e) => { setToStation(e.target.value) }} required />
					</div>


					<datalist id='city'>
						<option value="ADI" >Ahmedabad </option>
						<option value="ST"  >Surat</option>
						<option value="BRC" >Vadodara</option>
						<option value="RJT" >Rajkot</option>
						<option value="MMCT">Mumbai</option>
						<option value="DLI" >Delhi</option>
						<option value="JP"  >Jaipur</option>
					</datalist>
				</div>

				<div className='booking_input' id='booking_input'>
					<div className='selection'>
						<label htmlFor="date">DATE</label>
						<input required type="date" name='Date' value={journeyDate} onChange={(e) => { setDate(e.target.value) }} />
					</div>
					<div className='selection'>

						<label htmlFor="class">CLASS</label>
						<select required name="class" id="class_selection" value={trainClass} onChange={(e) => { setClass(e.target.value) }}>
							<option value="1A">1A</option>
							<option value="2A">2A</option>
							<option value="3A">3A</option>
							<option value="CCC">AC chair car </option>
							<option value="EC">Executive chair car </option>
							<option value="3E">Third AC economy</option>
							<option value="SL">Sleeper Class(SL)</option>
							<option value="2S">Second Class</option>
						</select>
					</div>
					<div className='selection'>

						<label htmlFor="categoty">Category</label>
						<select name="class" id="category_selection" value={Category} onChange={(e) => { setCategory(e.target.value) }}>
							<option value="All_classes">All Classes</option>
							<option value="General">General</option>
							<option value="AC">AC</option>
							<option value="Non-AC">Non-AC</option>

						</select>
					</div>


				</div>
			<div id='searchtrain'>
				<button id='submit' type='submit' onClick={train_API}>Search</button>
			</div>

			{isData !== undefined && <div className='train_details'>
				{trainDetails.map((train, index) => (
					isData ? <Card key={index} data={train} /> : <h1 style={{margin:30}}>No Data Available</h1>
				))}
			</div>}

		</div>
	)
}

export default HomePage;