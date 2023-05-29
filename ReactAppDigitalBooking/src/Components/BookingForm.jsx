import React, { useEffect, useState } from 'react'
import  {useContextGlobal}  from '../Components/Utils/global.context';
import axios from 'axios'

const BookingForm = ({}) => {
  const {userDB} = useContextGlobal();
  const [data, setData] = useState();
  const fetchData = async () => {
    await axios(`http://localhost:8080/users/findByEmail/${userDB?.email}`)
    .then(res => setData(res.data))
    .catch((error) => console.log(error.message))
}
  useEffect(() => {
    fetchData()
  }, [userDB]);
  return (
    <div className='bookingForm'>
      <h2>Completá tus datos</h2>
      <form action="" method='' className='formTemplate'>
        <div className="inputBookingForm">
          <label>Nombre</label>
          <input type="text" value={data?.name} disabled/>
        </div>
        <div className="inputBookingForm">
          <label>Correo electrónico</label>
          <input type="email" value={data?.email} disabled/>
        </div>
        <div className="inputBookingForm">
          <label>Apellido</label>
          <input type="text" value={data?.lastname} disabled/>
        </div>
      </form>
    </div>
  )
}

export default BookingForm