import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookingList = ({list}) => {
console.log(list);

return (
    <div className='cardContainer'>
    {list?.map(item => 
        <div key={item.id} >
            <div className='cardUserBooking'>
            <img src={item.images[0].url} className='imgBooking'/>
            <div className='cardContent'>
            <h2>{item.title}</h2>
            <p>Check-in: {item.startDate}</p>
            <p>Check-out: {item.endDate}</p>
            </div>
            </div>
    </div>)}
    </div>
)
}

export default BookingList