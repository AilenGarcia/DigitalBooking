import React from 'react'
import { useState, useEffect} from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useContextGlobal } from './Utils/global.context';
import es from 'date-fns/locale/es'
import moment from 'moment';
registerLocale("es", es)

const Search = () => {
  const {getCities, getDatesCities, getDates, setCities, setTitulo} = useContextGlobal();
  const [add, setAdd] = useState('')
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  function onChangeDateHandler(value){
    setStartDate(value[0]);
    setEndDate(value[1]);
  }

  const [data, setData]= useState();
  useEffect(()=>{
    const fetchData = async ()=>{
      await axios('http://localhost:8080/cities/list')
      .then(res => setData(res.data))
      .catch((error) => console.error(error))
    }
    fetchData()
    }, [])

    const buscar = () => {
      if (startDate != undefined && endDate != undefined && add != "") {
        console.log("fechas y ciudad");
        setCities([])
        getDatesCities(add, startDate, endDate);
      }
      else if (add != null && startDate == undefined && endDate == undefined) {
        console.log("ciudad");
        setCities([])
        getCities(add);
      }
      else if (startDate != undefined && endDate != undefined){
      console.log("fechas");
      setCities([])
      getDates(startDate, endDate)}
    }


  return (
    <div className='searcher'>
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <div className='inputs'>
      {/* <select className='selectLugar' name="" id="" onChange={(e)=>{setAdd(e.target.value)}}>
                <option value="" selected>¿A dónde vamos?</option>
                {data?.map(item =>{
                  return <option key={item.idCities}>{item.name}</option>
                }) }
      </select> */}
      <select className='selectLugar' name="" id="" value={add} onChange={(e)=>{setAdd(e.target.value)}}>
        <option value="">¿A dónde vamos?</option>
        {data?.map(item => (
        <option key={item.idCities} value={item.name}>{item.name}</option>
        ))}
      </select>

      <div className='datePickerSearch'>
      <DatePicker className='datePicker'
       monthsShown={2}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChangeDateHandler}
        dateFormat="dd MMM yyyy"
        placeholderText='Check in - Check out'
        minDate={new Date()}
        locale="es"
        isClearable
      />
      </div>
      <div className='datePickerSearchMobile'>
      <DatePicker className='datePicker'
       monthsShown={1}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChangeDateHandler}
        dateFormat="dd MMM yyyy"
        placeholderText='Check in - Check out'
        minDate={new Date()}
        locale="es"
        isClearable
      />
      </div>

      <button className='buscar' onClick={buscar}>Buscar</button>
      </div>
    </div>
  )
}

export default Search