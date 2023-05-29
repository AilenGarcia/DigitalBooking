import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import "./AddProduct.css";
import axios from 'axios';
import Loader from '../Components/Loader'
import useInput from '../Components/Utils/useInput';
import { Link, useNavigate } from 'react-router-dom';
import {faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AddProduct = () => {
    const [data, setData]= useState();
    const [categories, setCategories] = useState([]);
    const [caract, setCaract] = useState();
    const [loading,setLoading] = useState(false);
    const [images,setImages] = useState([])
    const [image,setImage] = useState()
    const [categorieSelected, setCategorieSelected] = useState()
    const [citySelected, setCitySelected] = useState()
    const [checkedValue,setValue] = useState([])
    const [msg,setMsg] = useState('')
    const navigate = useNavigate()

    const fetchData1 = async ()=>{
        setLoading(true)
        await axios('http://localhost:8080/cities/list')
        .then(res => setData(res.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      }
      const fetchData2 = async () => {
        setLoading(true)
        await axios('http://localhost:8080/categories/list')
        .then(res => setCategories(res.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      }
      const fetchData3 = async ()=>{
        setLoading(true)
        await axios('http://localhost:8080/characteristics/list')
        .then(res => setCaract(res.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      }


const [product, setProduct] = useState({
    address: '',
    description: '',
    descriptionAddress: '',
    housesRules: '',
    cancellation: '',
    safetyHygiene: '',
    title: '',
    latitude: '',
    longitude: '',
    categories: '',
    cities: '',
    characteristics: '',
    images: ''
})
  function handleChange(event){
    const {value,checked} = event.target
    if(checked){
        setValue(pre => [...pre, value])
    }else{
        setValue(pre =>{
            return [...pre.filter(charac => charac !== value)]
        })
    }
  }
  function handleChangImg(e){
    e.preventDefault();
    if(image){
        setImages([...images, image?.target.value])
        setImage('')
    }
  }
  function handleDel(e,img){
    e.preventDefault();
        setImages(pre => {
            return [...pre.filter(imgn => imgn !== img)]
        })
  }

  const onClick = (e) => {
    e.preventDefault();
    if(product.description != '' && product.title != '' && product.latitude != '' && product.longitude != '' && product.descriptionAddress != '' && product.housesRules != '' && product.safetyHygiene != '' && product.cancellation != '' && product.categories != '' && product.cities != '' && product.images != '' ){
        fetchData()
        navigate('/successfulProduct')
    }else{
        setMsg('Lamentablemente no ha podido crearse. Por favor intente más tarde')
    }
  }; 
  useEffect(()=>{
    if(categorieSelected){
        setProduct({ ...product, categories: {"idCategories": Number(categorieSelected)}})
    }
  },[categorieSelected])
  
  useEffect(()=>{
    if(citySelected){
        setProduct({ ...product, cities: {"idCities": Number(citySelected)}})
    }  
  },[citySelected])
  
  useEffect(()=>{
    let format =[]
    if(checkedValue){
        checkedValue.map(item => (
            format.push({"idCharacteristics": item})
        ))
        setProduct({ ...product, characteristics: format})
    }   
  },[checkedValue])

  useEffect(()=>{
    let format =[]
    let numeros = ""

    if(images){
        images.map((item,index) => (
            format.push({"title": product.title + index ,"url": item})
        ))
        setProduct({ ...product, images: format})
    }   
  },[images])
  
  // ! -----------------------------------------------------

  console.log(product)

  const fetchData = async () => {
    let status = undefined
    let error = undefined
    try{
      const response = await axios.post('http://localhost:8080/products/saveWithImages', product)
    status = response.status
    }catch(err){
      error = err.response.status
    }
  
    if (status === 201) {
      setMsg('Alojamiento creado exitosamente');
    } else if(error){
      setMsg('Lamentablemente no ha podido crearse. Por favor intente más tarde');
    }
  }
  useEffect(() => {
    fetchData2()
    fetchData1()
    fetchData3()
},[])

  // ! -----------------------------------------------------
  return (
    <>
    {loading ? <Loader loading={loading}/> : 
    <>
    <div className='headerProduct'>
            <h2>Administración de productos</h2>
            <Link to={'/'}><FontAwesomeIcon className="goBack" icon={faChevronLeft} /></Link>
        </div>
    <div className='containerAddForm'>
        <h1>Crear propiedad</h1>
        <form className='addForm'>

            <section className='mainData'>
                <div className='inputBox propertName'>
                    <label htmlFor='title'>Nombre de la propiedad</label>
                    <input type='text' name='title' placeholder='Dream Beach' onChange={(e) => setProduct({ ...product, title: e.target.value})}  required />
                </div>
                {/* <div className='inputBox category'>
                    <label htmlFor='categories'>Categoría</label>
                    <select name="categories"  required value={categorieSelected} onChange={handle} >
                        <option value='no' ></option>
                        {categories?.map(item => (
                            // <option key={item.idCategories} value={item.idCategories} id={item.idCategories} onChange={(e) => setProduct({ ...product, categories: `"idCategories": ${e.target.value}`})}>{item.title}</option>
                            <option key={item.idCategories} value={item.idCategories} id={item.idCategories}>{item.title}</option>
                        ))}
                    </select>
                </div> */}
                 <div className='inputBox category'>
                    <label htmlFor='categories'>Categoría</label>
                    <select value={categorieSelected} onChange={(e) => setCategorieSelected(e.target.value)} required>
                        <option value="" selected disabled>Selecciona una categoria...</option>
                        {categories?.map(item => (
                            <option key={item.idCategories} value={item.idCategories} id={item.idCategories}>{item.title}</option>
                        ))}
                    </select>
                </div>

                 <div className='inputBox address'>
                    <label htmlFor='address'>Dirección</label>
                    <input type='text' name='address' placeholder='Cl. 20 #44 16' onChange={(e) =>setProduct({ ...product, address: e.target.value})} required/>
                </div>
                <div className='inputBox descriptionAddress'>
                    <label htmlFor='descriptionAddress'>Descripción de la dirección</label>
                    <textarea type='text' name='descriptionAddress' id='descriptionAddress' placeholder='Escribir aqui' onChange={(e) =>setProduct({ ...product, descriptionAddress: e.target.value})} required/>
                </div>
                <div className='inputBox city'>
                    <label htmlFor='city'>Ciudad</label>
                    <select name="" id="" value={citySelected} onChange={e => setCitySelected(e.target.value)} required>
                        <option value="" disabled selected>Selecciona una ciudad...</option>
                        {data?.map(item => (
                            <option key={item.idCities} value={item.idCities} id={item.idCities}>{item.name}</option>
                        ))}
                </select>
                </div>
                <div className='inputBox lat'>
                    <label htmlFor='latitude'>Latitud</label>
                    <input type='text' name='latitude' placeholder='-1202920' onChange={(e) =>setProduct({ ...product, latitude: e.target.value})} required/>
                </div>
                <div className='inputBox long'>
                    <label htmlFor='longitude'>Longitud</label>
                    <input  type='text' name='longitude' placeholder='-0237923' onChange={(e) =>setProduct({ ...product, longitude: e.target.value})} required/>
                </div>
                <div className='inputBox description'>
                    <label htmlFor='description'>Descripción</label>
                    <textarea  type='text' name='description' id='description' placeholder='Escribir aqui' onChange={(e) =>setProduct({ ...product, description: e.target.value})} required/>
                </div>
                
            </section>

            <h2>Agregar atributos</h2>
            <section className='attributes '>
                    {caract?.map(item => (
                        <div className='attribute' key={item.idCharacteristics}>
                            <input type='checkbox' key={item.idCharacteristics} name='attribute' value={item.idCharacteristics} onChange={handleChange} className='inputCheckBox' />{item.title}
                        </div>
                        ))}
            </section>
            {/* <section className='attributes '>
                    <div className='attribute inputBox2'>
                        <label htmlFor="attribute">Nombre</label>
                        <input type="text" name='attribute'/> 
                    </div>
                    <div className='iconName inputBox2'>
                        <label htmlFor="iconName">Icono</label>
                        <input type="text" name='iconName'/>
                    </div>
                    <FontAwesomeIcon icon={faSquarePlus} className='icon'/>
            </section> */}
            <h2>Politicas del producto</h2>
            <section className='politics'>
                <div className='plticsBox'>
                    <h3>Normas de la casa</h3>
                    <p>Descripcion</p>
                    <textarea  name='housesRoules' type="textarea" placeholder='Para separar por párrafos, utilice al final de la oración un punto.' onChange={(e) =>setProduct({ ...product, housesRules: e.target.value})} required/>
                </div>
                <div className='plticsBox'>
                    <h3>Salud y Seguridad</h3>
                    <p>Descripción</p>
                    <textarea name='safetyHygiene' type="textarea" placeholder='Para separar por párrafos, utilice al final de la oración un punto.' onChange={(e) =>setProduct({ ...product, safetyHygiene: e.target.value})} required/>
                </div>
                <div className='plticsBox'>
                    <h3>Política de cancelación</h3>
                    <p>Descripción</p>
                    <textarea name='cancellation' type="textarea" placeholder='Para separar por párrafos, utilice al final de la oración un punto.' onChange={(e) =>setProduct({ ...product, cancellation: e.target.value})} required/>
                </div>
            </section>

            <h2>Cargar imágenes</h2>
            {images ? images.map((img) => (
                        <div className='imgAdd' >
                            <input type="text" placeholder={img} required/>
                            <button onClick={e => handleDel(e,img)}><FontAwesomeIcon icon={faSquareXmark} className='iconDelete'/></button>
                        </div>
                        )) : null} 
            <section className='imgAdd'>
                    <input type="text" placeholder='Insertar https://'  onChange={e => setImage(e)} required/>
                    <button onClick={handleChangImg}><FontAwesomeIcon icon={faSquarePlus} className='icon2'/></button>
            </section>
            {msg ? 
            <div className='errorProducto'>
            <FontAwesomeIcon icon={faCircleExclamation}/>
            <p >{msg ? msg : ""}</p>
            </div>
            : ""
            }
            <button className='addButton' onClick={onClick} type='submit'>Crear</button>
        </form>
    </div>
    </> 
}
    </>
  )
}

export default AddProduct