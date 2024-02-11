import React from 'react'
import './Card.css' 

const Card = (props) => {
    console.log(props);
  return (
    <div id="details">
        <div id='stationdetails'>
            <div id='fromsection'>
                <h3>From : {props.data.from} </h3>
                <h3>Station Name : {props.data.from_station_name} </h3>
                <p>Time : {props.data.from_sta} </p>
            </div>
            <div id='timedetails'>
                <h3>Train Name : {props.data.train_name} </h3>
                <h3>Train Class : {props.data.train_class_type} </h3>
                Train Number : {props.data.train_number} 
                <p>Runs On : </p>
                <p>Date : {props.data.train_date}</p>
                <p>Duration : {props.data.duration}</p>

            </div>
            <div id='tosection'>
                <h3>To : {props.data.to} </h3>
                <h3>Station Name : {props.data.to_station_name} </h3>
                <p>Time : {props.data.to_sta} </p>
            </div>
        </div>
        <div id='train_book'>
            <button className='train_button'> Add to list</button>
            <button className='train_button'> Book </button>
        </div>
    </div>
  )
}

export default Card