import React from 'react'
import HeaderProduct from '../Components/HeaderProduct'
import Calendar from '../Components/Calendar'
import PoliticsProduct from '../Components/PoliticsProduct'
import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import imgLocaliz from '../images/localizador.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./Booking.css";
import Loader from '../Components/Loader'
import  {useContextGlobal}  from '../Components/Utils/global.context';
import BookingForm from '../Components/BookingForm'
import CheckTimeForm from '../Components/CheckTimeForm'
import moment from 'moment';
import { SyncLoader } from 'react-spinners';
import {faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Booking = () => {
    const params = useParams();
    const { dateRange, id,checkInTime,setDateRange} = useContextGlobal();
    const [info, setInfo] = useState()
    const [image, setImage] = useState({})
    const [loading, setLoading] = useState(false);
    const [loadingButton, setLoadingButton] = useState(false)

    const fetchData = async () => {
      setLoading(true)
      await axios(`http://localhost:8080/products/find/${params.id}`)
      .then(res => setInfo(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }
  
    const fetchData2 = async () => {
      setLoading(true)
      await axios(`http://localhost:8080/images/findProductsWithImages/${params.id}`)
      .then(res => setImage(res.data[0]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  useEffect(()=>{
    fetchData()
    fetchData2()
  },[params.id])

  const [msg, setMsg] = useState()
  const navigate = useNavigate();

  const fetch = async ()=>{
    let status = undefined
    let error = undefined
    try{
      setLoadingButton(true)
      const response = await axios.post('http://localhost:8080/bookings/save', {
        checkIn: checkInTime,
        startDate:moment(dateRange[0]).format('YYYY/MM/DD'),
        endDate: moment(dateRange[1]).format('YYYY/MM/DD'),
        idClient: id,
        idProducts: params.id
      }, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      status = response.status
    } catch(err){
      error = err.response.status
    } finally{
      setLoadingButton(false)
      setDateRange([null,null])
    }
      if(status === 201){
        navigate('/successfulBooking')
      } else if(error){
        setMsg('Lamentablemente la reserva no ha podido realizarse. Por favor, revise los datos o intente más tarde');
      }
    }

  const bookingSubmit = ()=>{
    if(dateRange !== null && dateRange !== undefined && dateRange !== "" && checkInTime !== null && checkInTime !== undefined && checkInTime !== ""){
      fetch()
    } else{
      setMsg('Lamentablemente la reserva no ha podido realizarse. Por favor, revise los datos o intente más tarde');
    }
  }
  //----------------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
return (
  <>
    {loading ? <Loader loading={loading}/> :  
    <>
      <HeaderProduct title={info?.title} category={info?.categories.title}/>
  <div className='bookingPage'>
      <BookingForm/>
      <Calendar idProducts={params.id} title={'Seleccioná tu fecha de reserva'}/>
      <CheckTimeForm/>
      <div className="cardBooking">
        <h2 className='h2Detalle'>Detalle de la reserva</h2>
        <img src={image.url} className='image'/>
        <div className='cardDetails'>
            <h5 style={{ opacity: '0.5'}}>{info?.categories.title}</h5>
            <h2>{info?.title}</h2>
            <div className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} className="noColor"/>
            </div>
            <p className='location'><img src={imgLocaliz}/>{`${info?.cities.name}, ${info?.cities.countries.name}`}</p>
            <div className="checkIn">
              <p>Check In</p>
              <p>{dateRange[0] === null ? '' : moment(dateRange[0]).format('YYYY/MM/DD') }</p>
            </div>
            <div className="checkOut">
              <p>Check Out</p>
              <p>{dateRange[1] === null ? '' : moment(dateRange[1]).format('YYYY/MM/DD')}</p>
            </div>
            <button onClick={bookingSubmit}>{loadingButton ?  <SyncLoader
    color={"#fafafa"}
    loading={loadingButton}
    size={10}
  /> : 'Confirmar reserva'}</button>
  {msg ? 
            <div className='errorBooking'>
            <FontAwesomeIcon icon={faCircleExclamation}/>
            <p >{msg ? msg : ""}</p>
            </div>
            : ""
            }
        </div>
      </div>

      </div>
      <PoliticsProduct info={info}/>
      </>
    }
    </>
)
}
export default Booking