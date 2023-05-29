import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookingList from '../Components/BookingList';
import EmptyBooking from '../Components/EmptyBooking';
import Loader from '../Components/Loader'
import { useContextGlobal } from '../Components/Utils/global.context';

const UserBooking = () => {
  // const {id} = useContextGlobal()
  const params = useParams()
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
const fetchData = async () => {
  setLoading(true)
  await axios(`http://localhost:8080/bookings/findByUser/${params.id}`)
    .then(res => setData(res.data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}
useEffect(()=>{
  fetchData()
},[])
  return (
    <div>
      {loading ? <Loader loading={loading}/> : 
      <div>
        <div className='headerProduct'>
            <h2>Mis reservas</h2>
            <Link to={'/'}><FontAwesomeIcon className="goBack" icon={faChevronLeft} /></Link>
        </div>
        {data ? <BookingList list={data}/> : <EmptyBooking/>}
        {/* <BookingList list={data}/> */}
        </div>
      }
    </div>
  )
}

export default UserBooking