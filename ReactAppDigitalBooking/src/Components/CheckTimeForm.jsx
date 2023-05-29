import React, { useEffect, useState } from 'react'
import  {useContextGlobal}  from '../Components/Utils/global.context';
import axios from 'axios'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookingForm = ({}) => {
    const {checkInTime, setCheckInTime} = useContextGlobal();
    const [arrivalTimes] = useState(['10:00','11:00','12:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00 '])
  return (
    <div className='checkForm'>
      <h2>Tu horario de llegada</h2>
      <form action="" method='' className='formTemplate'>
        <h3><FontAwesomeIcon icon={faCircleCheck} /> Tu habitacion va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</h3>
        <p>Indica tu horario estimado de llegada</p>
        <select name="" id="" className='selectCheckIn' onChange={(e)=>{setCheckInTime(e.target.value)}}>
            <option value="" selected>Seleccionar hora de llegada</option>
            {arrivalTimes.map(time => (
                <option key={time} value={time}>{time}</option>
            ))}
        </select>
      </form>
    </div>
  )
}

export default BookingForm