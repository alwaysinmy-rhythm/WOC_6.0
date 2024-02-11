import React, { useState,useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import './Card.css' 


const Card = (props) => {
    // console.log(props.data);
    const trainfare = {
        "status": true,
        "message": "Success",
        "timestamp": 1707662400294,
        "data": {
            "general": [
                {
                    "classType": "1A",
                    "fare": 1250,
                    "breakup": [
                        {
                            "title": "Base Charges",
                            "key": "baseFare",
                            "cost": 1055
                        },
                        {
                            "title": "Reservation Charges",
                            "key": "reservationCharges",
                            "cost": 60
                        },
                        {
                            "title": "Superfast Charges",
                            "key": "superfastCharges",
                            "cost": 75
                        },
                        {
                            "title": "GST",
                            "key": "serviceTax",
                            "cost": 60
                        },
                        {
                            "title": "Total Amount",
                            "key": "total",
                            "cost": 1250
                        }
                    ]
                },
                {
                    "classType": "3A",
                    "fare": 545,
                    "breakup": [
                        {
                            "title": "Base Charges",
                            "key": "baseFare",
                            "cost": 434
                        },
                        {
                            "title": "Reservation Charges",
                            "key": "reservationCharges",
                            "cost": 40
                        },
                        {
                            "title": "Superfast Charges",
                            "key": "superfastCharges",
                            "cost": 45
                        },
                        {
                            "title": "GST",
                            "key": "serviceTax",
                            "cost": 26
                        },
                        {
                            "title": "Total Amount",
                            "key": "total",
                            "cost": 545
                        }
                    ]
                },
                {
                    "classType": "2A",
                    "fare": 750,
                    "breakup": [
                        {
                            "title": "Base Charges",
                            "key": "baseFare",
                            "cost": 619
                        },
                        {
                            "title": "Reservation Charges",
                            "key": "reservationCharges",
                            "cost": 50
                        },
                        {
                            "title": "Superfast Charges",
                            "key": "superfastCharges",
                            "cost": 45
                        },
                        {
                            "title": "GST",
                            "key": "serviceTax",
                            "cost": 36
                        },
                        {
                            "title": "Total Amount",
                            "key": "total",
                            "cost": 750
                        }
                    ]
                },
                {
                    "classType": "SL",
                    "fare": 175,
                    "breakup": [
                        {
                            "title": "Base Charges",
                            "key": "baseFare",
                            "cost": 125
                        },
                        {
                            "title": "Reservation Charges",
                            "key": "reservationCharges",
                            "cost": 20
                        },
                        {
                            "title": "Superfast Charges",
                            "key": "superfastCharges",
                            "cost": 30
                        },
                        {
                            "title": "Total Amount",
                            "key": "total",
                            "cost": 175
                        }
                    ]
                }
            ],
            "tatkal": [
                {
                    "classType": "1A",
                    "fare": "",
                    "breakup": []
                },
                {
                    "classType": "3A",
                    "fare": 1150,
                    "breakup": [
                        {
                            "title": "Base Charges",
                            "key": "baseFare",
                            "cost": 710
                        },
                        {
                            "title": "Reservation Charges",
                            "key": "reservationCharges",
                            "cost": 40
                        },
                        {
                            "title": "Superfast Charges",
                            "key": "superfastCharges",
                            "cost": 45
                        },
                        {
                            "title": "GST",
                            "key": "serviceTax",
                            "cost": 55
                        },
                        {
                            "title": "Tatkal Charges",
                            "key": "tatkalCharges",
                            "cost": 300
                        },
                        {
                            "title": "Total Amount",
                            "key": "total",
                            "cost": 1150
                        }
                    ]
                },
                {
                    "classType": "2A",
                    "fare": 1590,
                    "breakup": [
                        {
                            "title": "Base Charges",
                            "key": "baseFare",
                            "cost": 1019
                        },
                        {
                            "title": "Reservation Charges",
                            "key": "reservationCharges",
                            "cost": 50
                        },
                        {
                            "title": "Superfast Charges",
                            "key": "superfastCharges",
                            "cost": 45
                        },
                        {
                            "title": "GST",
                            "key": "serviceTax",
                            "cost": 76
                        },
                        {
                            "title": "Tatkal Charges",
                            "key": "tatkalCharges",
                            "cost": 400
                        },
                        {
                            "title": "Total Amount",
                            "key": "total",
                            "cost": 1590
                        }
                    ]
                },
                {
                    "classType": "SL",
                    "fare": 425,
                    "breakup": [
                        {
                            "title": "Base Charges",
                            "key": "baseFare",
                            "cost": 275
                        },
                        {
                            "title": "Reservation Charges",
                            "key": "reservationCharges",
                            "cost": 20
                        },
                        {
                            "title": "Superfast Charges",
                            "key": "superfastCharges",
                            "cost": 30
                        },
                        {
                            "title": "Tatkal Charges",
                            "key": "tatkalCharges",
                            "cost": 100
                        },
                        {
                            "title": "Total Amount",
                            "key": "total",
                            "cost": 425
                        }
                    ]
                }
            ]
        }
    }

    const navigate = useNavigate() ; 
    let bookcard = false ; 
    const [FareData , setFareData] = useState([]); 


    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v2/getFare',
        params: {
          trainNo: props.data.train_number,
          fromStationCode: props.data.from,
          toStationCode: props.data.to
        },
        headers: {
          'X-RapidAPI-Key': 'b4e70a699amsh14ca2c7b34873bfp17c5b7jsn42b9d3f300ca',
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      };


    const handleBooking =async ()=>{
        try {
            // const response = await axios.request(options);
            // console.log(response.data);
            setFareData(trainfare.data);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        if(FareData.length != 0 ) {
            console.log(FareData); 
            navigate('/private/BookingPage'  ,{ state: { faredata : FareData , traindata : props.data} })
            console.log(bookcard);
        }
    },[FareData])

  return (
    props.data.class_type.includes(props.class) && 
    <div id="details">
        <div id='stationdetails'>
            <div id='fromsection'>
                <h3>From : {props.data.from} </h3>
                <h3>Station Name : {props.data.from_station_name} </h3>
                <p>Time : {props.data.from_sta} </p>
            </div>
            <div id='timedetails'>
                <h3>Train Name : {props.data.train_name} </h3>
                <p>Train Class : {props.data.class_type.join(' | ')} </p>
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
            <button className='train_button' name='add_booklist'> Add to list</button>
            <button className='train_button' name='book_ticket' onClick={handleBooking} > Book </button>
        </div>
        
    </div>
  )
}
export default Card