import React from 'react'
import CharacteristicsProduct from '../Components/CharacteristicsProduct'
import DescriptionProduct from '../Components/DescriptionProduct'
import HeaderProduct from '../Components/HeaderProduct'
import ImagesProduct from '../Components/ImagesProduct'
import LocationProduct from '../Components/LocationProduct'
import Maps from '../Components/Maps'
import Calendar from '../Components/Calendar'
import PoliticsProduct from '../Components/PoliticsProduct'
import { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useFetch } from "../Components/Utils/useFetch";
import Loader from '../Components/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import  {useContextGlobal}  from '../Components/Utils/global.context';

const Product = () => {
  const {setErrMessageLoginBooking,userDB} = useContextGlobal();
  const params = useParams()
  const { data, loading} = useFetch(
        `http://localhost:8080/products/find/${params.id}`
      );

const [images, setImages] = useState([]);
const fetchData2 = async () => {
  await axios(`http://localhost:8080/images/findProductsWithImages/${params.id}`)
    .then(res => setImages(res.data))
    .catch((error) => console.error(error))
}

useEffect(()=>{
  fetchData2()
},[params.id])

const token = localStorage.getItem('token');
const navigate = useNavigate()
const onClick = ()=>{
  if(token !== "" && token !== null && token !== undefined ){
    navigate('/product/' + `${params.id}` + '/booking');
    setErrMessageLoginBooking('')
  } else{
    navigate('/login')
    setErrMessageLoginBooking('Para realizar una reserva necesitas estar logueado')
  }
}

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
    {loading ? <Loader loading={loading}/> :  
    <div>
    <HeaderProduct title={data?.title} category={data?.categories.title}/>
    <LocationProduct descriptionAddress={data?.descriptionAddress} city={data?.cities.name} province={data?.cities.province} country={data?.cities.countries.name} stars={data?.stars} category={data?.categories.title}/>
    <ImagesProduct images={images}/>
    <DescriptionProduct info={data}/>
    <CharacteristicsProduct info={data}/>
    <section className="calendar">
      <div className="booking">
        <Calendar idProducts={params.id} title={'Fechas disponibles'}/>
        <div className='reservationBlock'>
          <p>Agrega tus fechas de viaje para obtener precios exactos</p>
          {/* <Link to={'/product/' + `${params.id}` + '/booking'}><button onClick={onClick}>Iniciar reserva</button></Link> */}
          <button onClick={onClick}>Iniciar reserva</button>
        </div>
      </div>
    </section>
    <p className='mapaProduct'>Clickea el mapa para conocer la ubicacion de {data?.title}</p>
    <Maps latitude={data?.latitude} longitude={data?.longitude}/>
    <PoliticsProduct info={data}/>
</div>}
</>
  )
}

export default Product