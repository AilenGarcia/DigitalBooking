import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import moment from "moment";

const ContextGlobal = createContext()


const Context = ({ children }) => {
  const [dateRange, setDateRange] = useState([null,null]);
  const [checkInTime, setCheckInTime] = useState();
  const [errMessageLoginBooking,setErrMessageLoginBooking] = useState()
  const [cities, setCities] = useState([]);
  const [titulo, setTitulo] =useState("")
  const [loading2,setLoading2] = useState(false)

  const [filteredData, setFilteredData] = useState([])
  const [userDB, setUserDB] = useState({
    name: '',
    lastName: '',
    email: '',
    logIn: false,
    rol: ''
})
    const getCities = (add) =>{
      const fetchData = async()=>{
        setLoading2(true)
      await axios(`http://localhost:8080/products/listForCity/${add}`)
      // .then(res => setCities(res.data))
      .then(res => res.data.length == 0 ? setTitulo("No hay alojamientos disponibles") : setCities(res.data), setTitulo(`Alojamientos disponibles para ${add}`))
      .catch((error) => console.error(error))
      .finally(()=>setLoading2(false))
    }
    fetchData()
    }

const filterCategory = (category) => {
  const fetchData = async () => {
    await axios(`http://localhost:8080/products/listByCategory/${category}`)
    .then(res => setFilteredData(res.data))
    .catch((error) => console.error(error))
}
fetchData()
}


const getDatesCities = (add, startDate, endDate) => {
  if (!add || !startDate || !endDate) return; // retorna si algún argumento es indefinido o nulo
  const fetchData = async () => {
    setLoading2(true)
    await axios(`http://localhost:8080/products/filter/${add}/${moment(startDate).format('YYYY-MM-DD')}/${moment(endDate).format('YYYY-MM-DD')}`)
    .then(res => res.data.length == 0 ? setTitulo("No hay alojamientos disponibles") : setCities(res.data), setTitulo(`Alojamientos disponibles para ${add} entre ${moment(startDate).format('YYYY-MM-DD')} y ${moment(endDate).format('YYYY-MM-DD')}`))
    .catch((error) => console.error(error))
    .finally(()=>setLoading2(false))
    // .finally(() => {
    //   localStorage.removeItem(cities);
    // });
  }
  fetchData()
}

//------------------------------------------------------

const getDates = (startDate, endDate) => {
  const fetchData = async () => {
    setLoading2(true)
    await axios(`http://localhost:8080/products/listForDates/${moment(startDate).format('YYYY-MM-DD')}/${moment(endDate).format('YYYY-MM-DD')}`)
    // .then(res => setCities(res.data))
    .then(res => res.data.length == 0 ? setTitulo("No hay alojamientos disponibles") : setCities(res.data), setTitulo(`Alojamientos disponibles entre ${moment(startDate).format('YYYY-MM-DD')} y ${moment(endDate).format('YYYY-MM-DD')}`))
    .catch((error) => console.error(error))
    .finally(()=>setLoading2(false))
  }
  fetchData()
}

//------------------------------------------------------
const [userData, setUserData] = useState();

const fetchData = async () => {
  await axios(`http://localhost:8080/users/findByEmail/${userDB?.email}`)
  .then(res => setUserData(res.data))
  .catch((error) => console.log(error.message))
}
  useEffect(() => {
    if (userDB.email !== ''){
      fetchData()}
  }, [userDB.email]);

  useEffect(() => {
    setUserDB({ ...userDB, name: userData?.name, lastName: userData?.lastname , rol: userData?.roles.name});
  }, [userData]);

const id = userData?.id;
const [modal, setModal] = useState(false);
const toggleModal = () => {
  setModal(!modal);
};

  return (
    <ContextGlobal.Provider 
    value={{
      userDB,setUserDB, cities, getCities, setCities,filterCategory,filteredData, dateRange,setDateRange, getDatesCities, id,errMessageLoginBooking,setErrMessageLoginBooking, getDates,checkInTime,setCheckInTime,userData, setTitulo, titulo,loading2,toggleModal,modal
      }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export default Context

export const useContextGlobal =() => {
  return useContext(ContextGlobal)
}