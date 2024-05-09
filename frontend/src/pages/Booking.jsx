import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import './Booking.css'; 
import axios from 'axios';
import Cookies from 'js-cookie'


const Booking = () => {
    const location = useLocation() ;
    const [userdetails, setdata] = useState([]);
    const userEmail = Cookies.get('email'); 

    useEffect(()=>{

      axios.get(`http://localhost:3001/user/${userEmail}`)
        .then(res =>{
          console.log(res.data);
          setdata(res.data);
        })
        .catch(err=>{
          console.error('Failed to fetch data', err);
        })
      
        console.log(userdetails);
    }, [userEmail])

    
    console.log(location.state) ;
    const FareData = location.state.faredata ; 
    const TrainData = location.state.traindata ; 

    console.log(location.state.faredata) ;
    console.log(location.state.traindata) ;
     

    const handlepayment = ()=>{
      alert("Payment Section is under maintenance")
    }
  return (
    <div id='body'>
        <div id='Bill'>
            <p className='bill_element'>Name : {userdetails.FirstName} {userdetails.LastName}</p>
            <p className='bill_element'>Email Id : {userdetails.EmailId} </p>
            <p className='bill_element'>Train Name : {TrainData.train_name}</p>
            <p className='bill_element'>Train No. : {TrainData.train_number}</p>
            <p className='bill_element'>From  : {TrainData.from_station_name}</p>
            <p className='bill_element'>To  : {TrainData.to_station_name}</p>
            <p className='bill_element'>Amount : {FareData.general[0].fare}</p>
            <button id='payme' onClick = {handlepayment}> Pay</button>
        </div>

    </div>
  )
}

export default Booking