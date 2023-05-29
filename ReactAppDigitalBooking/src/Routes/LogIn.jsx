import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../Components/Utils/useInput'
import  {useContextGlobal}  from '../Components/Utils/global.context';
import axios from 'axios';
import User from '../Components/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";

const LogIn = () => {
  const {userDB,setUserDB,errMessageLoginBooking,userData} = useContextGlobal();
  const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
  const passwordRegex = /^(?=\w*[a-z])\S{6,}$/;
  const email = useInput('email', 'email',emailRegex)
  const password = useInput('password', 'password',passwordRegex)
  const [msg, setMsg] = useState();
  const navigate = useNavigate()

const onClick = (e) => {
  e.preventDefault();
  axios.post('http://localhost:8080/login', {
    username: email.value,
    password: password.value,
  })
  .then(response => {
    if (response.status === 200) {
      const {token} = response.data
      localStorage.setItem('token', token);
      localStorage.getItem('token')
      setUserDB({ ...userDB, logIn: true , email: email.value});
      navigate('/');
    } else {
      setMsg('Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde.');
    }
  })
  .catch(error => {
    setMsg('Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde.');
  });
};

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className='login'>
      {errMessageLoginBooking ? 
      <div className='errorBookingLogIn'> 
      <FontAwesomeIcon icon={faCircleExclamation}/>
        <p>{errMessageLoginBooking? errMessageLoginBooking : ''}</p>
      </div>
      : null}
      <Link className='closeLogin' to={'/'}><FontAwesomeIcon icon={faChevronLeft} /></Link>
        <h1>Iniciar sesión</h1>
        <form>
          <div className="loginCampos">
            <span>Correo electronico</span>
            <input {...email} className={email.classnameinput} />
            <p>{email.msg}</p>
            <span>Contraseña</span>
            <input {...password} className={password.classnameinput}/>
            <p>{password.msg}</p>
            <input className="ingresar" type='submit' value="Ingresar" onClick={onClick}/>
            <p className='msgerror'>{msg}</p>
          </div>
          <div className="registro">
            <p>¿Aún no tenés cuenta?</p>
            <Link to={'/createacc'}><p className='registroBoton'>Registrate</p></Link>
          </div>
      </form>
    </div>
  )
  }

export default LogIn