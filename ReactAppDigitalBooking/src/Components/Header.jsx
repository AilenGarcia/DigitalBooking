import React from 'react';
import Logo from '../images/LogoHeader.png'
import {Link, useLocation} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import User from './User';
import LogoMob from '../images/LogoMob.png'
import  {useContextGlobal}  from '../Components/Utils/global.context';
import {FaBars, FaTimes} from 'react-icons/fa'
import logosFooter from '../images/logosfooter.png'
import { useRef } from 'react';
import axios from 'axios';


const Header = () => {
  const {userDB, id} = useContextGlobal();
  let location = useLocation()
  const [mostrarLogin, setLogin] = useState(false)
  const [mostrarCrAcc, setCrAcc] = useState(false)
  const [rol,setRol] = useState()
  
  const name = userDB?.name
  const lastname = userDB?.lastName
  useEffect(()=>{
    if(userDB.rol == 'USUARIO'){
      setRol('USUARIO')
    }else{
      setRol('')
    }
    if(userDB.rol == 'ADMIN'){
      setRol('ADMIN')
    }else{
      setRol('')
    }
  },[])

  useEffect(() => {
    if (location.pathname === "/login") {
      setCrAcc(true)
      setLogin(false)
    }else if (location.pathname === "/createacc"){
      setLogin(true)
      setCrAcc(false)
    }else{
      setLogin(true)
      setCrAcc(true)}
    },[location])

  const navRef = useRef();
  const showNavBar = ()=>{
    navRef.current.classList.toggle('responsiveNav')
  }
  const [open, setOpen] = useState(false)

    const handleOpen = ()=> setOpen(open=>!open)
    
      const position = () =>{
        if(name){
          return "2rem"
        }else{
          return "8rem"
        }}
    
    return (
      <header>
        <Link to={'/'}><img className='LogoDesk' src={Logo} alt="Logo"/></Link>
        <Link to={'/'}><img className='LogoMob' src={LogoMob} alt="Logo"/></Link>
        <Link to={'/'}><img className='LogoTab' src={LogoMob} alt="Logo" style={{right:position()}}/></Link>
        <nav ref={navRef}>
        {name ? <User name={name} lastname={lastname}/> : <h3>MENU</h3>}
        <button className='navBtn navCloseBtn' onClick={showNavBar}><FaTimes/></button>
        <div className='menubuttons'>
        {name ? rol === 'ADMIN' ? <div className='bookinsMobileMenus'>
          <Link to={'/administration'} className='bookingsMobileMenus1' ><h5>Administracion</h5></Link>
          <Link to={'/'} onClick={()=> refresh()}  className='bookingsMobileMenus1' ><h5>Cerrar Sesion</h5></Link>
        </div>
        :<div className='bookinsMobileMenus'>
          <Link to={'/userbooking/' + `${id}`}  className='bookingsMobileMenus1' ><h5>Mis reservas</h5></Link>
          <Link to={'/'} onClick={()=> refresh()}  className='bookingsMobileMenus1' ><h5>Cerrar Sesion</h5></Link>
        </div>: <div className='buttons'><Link to={'/login'}><button className={mostrarLogin ? (mostrarCrAcc ? "visible headerButtons" : "visible headerButtons loginRight") : "invisible"} onClick={handleOpen}>Iniciar Sesion</button></Link><Link to={'/createacc'}><button className={mostrarCrAcc ? (mostrarLogin ? "visible headerButtons login2" : "visible headerButtons login2 loginTablet")  : "invisible"} onClick={handleOpen}>Crear Cuenta</button></Link></div>}
        <img src={logosFooter} alt="logosMobile" className='logosMobile' />
        </div>
        </nav>
        <button className='navBtn' onClick={showNavBar}><FaBars/></button>
      </header>
    )
  /*
  return (
    <header>
      <Link to={'/'}><img className='LogoDesk' src={Logo} alt="Logo" /></Link>
      <Link to={'/'}><img className='LogoMob' src={LogoMob} alt="Logo"/></Link>
      <Link to={'/'}><img className='LogoTab' src={LogoMob} alt="Logo" style={{right:position()}}/></Link>

      <nav ref={navRef}>
      <h3>MENU</h3>
      <button className='navBtn navCloseBtn' onClick={showNavBar}><FaTimes/></button>
      <div className='menubuttons'>
      {name ? <User name={name} lastname={lastname}/>: <div className='buttons'><Link to={'/login'}><button className={mostrarLogin ? (mostrarCrAcc ? "visible headerButtons" : "visible headerButtons loginRight") : "invisible"} onClick={handleOpen}>Iniciar Sesion</button></Link><Link to={'/createacc'}><button className={mostrarCrAcc ? "visible headerButtons" : "invisible"} onClick={handleOpen}>Crear Cuenta</button></Link></div>}
      <img src={logosFooter} alt="logosMobile" className='logosMobile' />
      </div>
      </nav>
      <button className='navBtn' onClick={showNavBar}><FaBars/></button>
    </header>
  )*/
}


export default Header