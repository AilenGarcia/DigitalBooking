import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  {useContextGlobal}  from '../Components/Utils/global.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const User = ({name, lastname}) => {
  const {setUserDB,userDB,userData, id} = useContextGlobal();
  const navigate = useNavigate()
  const [rol,setRol] = useState()
  

    const nameArray = Array.from(name)
    // const surnameArray = Array.from(lastname)
    const surnameArray = lastname ? Array.from(lastname) : [];
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
    const refresh = () => {
      const cerrarSesion = window.confirm("¿Desea cerrar sesión?");
      if (cerrarSesion) {
        setUserDB({ ...userDB, name: '', lastName: '' ,email: '', login: false , rol: ''});
        localStorage.clear();
        location.replace('/');
      }
    }
  return (
    <>
    {rol === 'ADMIN' ? 
     <div className='adminBox'>
      <Link to={'/administration'} style={{ fontWeight: 'bolder', textDecoration: 'none'}}><h5>Administracion</h5></Link>
      <div className = 'imgPerfil'><p>{nameArray[0]+surnameArray[0]}</p></div>
      <div>
          <p className = 'hello'>Hola,</p>
          <p className = 'nameUser'>{`${name} ${' '} ${lastname}`}</p>
      </div>
      <Link to={'/'} onClick={()=> refresh()} style={{ fontWeight: 'bolder', textDecoration: 'none'}}><p><FontAwesomeIcon icon={faRightFromBracket} /></p></Link>
    </div>
    :
    <div className='adminBox'>
       <Link to={'/userbooking/' + `${id}`} style={{ fontWeight: 'bolder', textDecoration: 'none'}}><h5>Mis reservas</h5></Link>
    <div className = 'imgPerfil'><p>{nameArray[0]+surnameArray[0]}</p></div>
    <div>
        <p className = 'hello'>Hola,</p>
        <p className = 'nameUser'>{`${name} ${' '} ${lastname}`}</p>
    </div>
    <Link to={'/'} onClick={()=> refresh()} style={{ fontWeight: 'bolder', textDecoration: 'none'}}><p><FontAwesomeIcon icon={faRightFromBracket} /></p></Link>
  </div>
    }
    </>
  )
}

export default User