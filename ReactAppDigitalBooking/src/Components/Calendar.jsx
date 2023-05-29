import React from 'react'
import { useState,useEffect } from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es'
registerLocale("es", es)
import axios from 'axios'
import  {useContextGlobal}  from '../Components/Utils/global.context';

const Calendar = ({idProducts,title}) => {
  const {dateRange,setDateRange} = useContextGlobal();
  const [excludedDates,setExcludedDates] = useState([])
  const [startDate,endDate] = dateRange;

  const onChangeDate = (value) => {
    setDateRange(value)
  }  
  const fetchData2 = async () => {
    await axios(`http://localhost:8080/bookings/findProducts/${idProducts}`)
      .then(res => setExcludedDates(res.data))
      .catch((error) => console.log(error.message))
  }
  function generarFechas(starDate,endDate){
    const fechas = [];
    let fechaActual = new Date(starDate);
    while (fechaActual <= new Date(endDate)){
        fechas.push(fechaActual.toISOString().slice(0,10));
        fechaActual.setDate(fechaActual.getDate() + 1);
    }
    return fechas;
}
  useEffect(()=>{
    fetchData2();
  },[]);
const [fechasDesabilitadas,setFechasDesabiliidads] = useState([])
console.log(excludedDates)
  useEffect(()=>{
    let fechasDesabilitadas = []
    excludedDates.map(item => {
      let aux = generarFechas(item?.startDate,item?.endDate);
      fechasDesabilitadas = fechasDesabilitadas.concat(aux)
      setFechasDesabiliidads(fechasDesabilitadas)
    })
  },[dateRange]);
  useEffect(()=>{
    console.log(dateRange);
    if(dateRange !== null){
      let aux = generarFechas(startDate,endDate)
      const fechaEncontrada = aux.some((fecha) => fechasDesabilitadas.includes(fecha));
      fechaEncontrada ? setDateRange([null,null]) : ""
    }
  },[dateRange]);


  return (
    <section className='calendar'>
    <h1>{title ? title : null}</h1>
     <div className='booking'>
      <div className='datePickerCalendar'>
      <DatePicker
      value={startDate}
        selectsRange={true}
        onChange={onChangeDate}
        monthsShown={2}
        inline
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        locale="es"
        excludeDateIntervals={excludedDates?.map(item =>{ return {start: new Date(item?.startDate), end: new Date(item?.endDate)}})}
        selectsDisabledDaysInRange={false}
        />
      </div>

      <div className='datePickerMobile'>
      <DatePicker
            selectsRange={true}
              onChange={onChangeDate}
              monthsShown={1}
              inline
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              excludeDateIntervals={excludedDates?.map(item =>{ return {start: new Date(item?.startDate), end: new Date(item?.endDate)}})}
              selectsDisabledDaysInRange={false}
              locale="es"
            />
      </div>
      {/* <div className='reservationBlock'>
        <p>Agrega tus fechas de viaje para obtener precios exactos</p>
        <Link to={'/product/' + `/${idProducts}` + '/booking/'}><button>Iniciar reserva</button></Link>
      </div> */}
    </div>
    </section>
    );
}

export default Calendar