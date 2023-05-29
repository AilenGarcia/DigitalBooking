// import React, { useState, useContext } from 'react'
// import { Link, useNavigate} from 'react-router-dom';
// import useInput from '../Components/Utils/useInput'
// import  {useContextGlobal}  from '../Components/Utils/global.context';
// import axios from 'axios';
// import { useEffect } from "react";
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const CreateAcc = () => {
// const {userDB,setUserDB} = useContextGlobal();
// const nameSurnameRegex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
// // const surnameRegex = /^[a-zA-Z\s']{2,}$/;
// const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
// const passwordRegex = /^(?=\w*[a-z])\S{6,}$/;
// const name = useInput('text', 'name',nameSurnameRegex);
// const surname = useInput('text', 'surname',nameSurnameRegex)
// const email = useInput('email', 'email',emailRegex)
// const password = useInput('password', 'password',passwordRegex);
// const confirmPassword = useInput('password', 'password',passwordRegex);
// const passwordsMatch = password.value === confirmPassword.value
// const [validPass,setValidPass] = useState(true)
// const [invalidPassMsg,setInvalidPassMsg] = useState('')
// const [msg, setMsg] = useState()
// const navigate = useNavigate()

// const fetchData = async () => {
//   let status = undefined
//   let error = undefined
//   try{
//     const response = await axios.post('http://localhost:8080/users/save', {
//       name: name.value,
//       lastname: surname.value,
//       email: email.value,
//       password: password.value,
//       idRoles: 1
// })
//   status = response.status
//   }catch(err){
//     error = error = err.response.data.error // Obtener el mensaje de error del servidor
//   }

//   if (status === 201) {
//     setUserDB({
//       name: name.value,
//       lastname: surname.value,
//       email: email.value,
//     });
//     navigate('/'); // Usamos el hook useNavigate en lugar de useHistory
//   } else if(error){
//     setMsg(`Lamentablemente no ha podido registrarse. Por favor intente más tarde`)
//   } else {
//     setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde')
//   }
// }
// const onClick = (e) =>{
//   e.preventDefault();
//   if(name.value !== null && surname.value !== null && email.value !== null &&
//     name.value !== undefined && surname.value !== undefined && email.value !== undefined){
//     if(name.isvalid && surname.isvalid && email.isvalid && password.isvalid && passwordsMatch){
//       fetchData()
//     }else{
//       setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde');
//     } 
//   } else{
//     setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde');
//     }
//   // if((!name.value || !surname.value) && (!email.isvalid && !password.isvalid && !passwordsMatch)){
//   //   setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde');
//   // } else {
//   //   fetchData()
//   // }
//   if(passwordsMatch === true && password.isvalid){
//     setValidPass(true)
//     setInvalidPassMsg('')
//   }else{
//     setValidPass(false)
//     setInvalidPassMsg('Las contraseñas no coinciden')
//   }
// }

// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

//   return (
//     <div className='signup'>
//             <Link className='closeLogin' to={'/'}><FontAwesomeIcon icon={faChevronLeft} /></Link>
//         <h1>Crear Cuenta</h1>
//         <form>
//           <div className='signupCampos'>
//             <div className='nombreApellido'>
//               <div className='datoInput'>
//                 <label>Nombre</label>
//                 <input {...name} className={name.classnameinput} required/>
//                 <p>{name.msg}</p>
//               </div>
//               <div className='datoInput'>
//                 <label>Apellido</label>
//                 <input {...surname} className={surname.classnameinput} required/>
//                 <p>{surname.msg}</p>
//               </div>
//             </div>
//             <div className="dato2Input">
//               <label>Correo electrónico</label>
//               <input {...email} className={email.classnameinput} required/>
//               <p>{email.msg}</p>
//             </div>
//             <div className="dato2Input">
//               <label>Contraseña</label>
//               <input {...password} className={`${password.classnameinput} ${validPass ? '' : 'error'}`} required/>
//               <p>{password.msg}</p>
//             </div>
//             <div className="dato2Input">
//               <label>Confirmar contraseña</label>
//               <input {...confirmPassword} className={`${confirmPassword.classnameinput} ${validPass ? '' : 'error'}`} required/>
//               <p>{confirmPassword.msg}</p>
//               <p>{invalidPassMsg}</p>
//               </div>
//             <input className='crearCuenta' type='submit' value="Crear cuenta" onClick={onClick}/>
//           </div>
//           <div className='linkLogin'>
//           <p>¿Ya tienes una cuenta?</p>
//           <Link to={'/login'}><p className='linkloginBoton'>Iniciar sesión</p></Link>
//           </div>
//         </form>
            
//     </div>
//   )
// }

// export default CreateAcc

// ! ---------------

import React, { useState, useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import useInput from '../Components/Utils/useInput'
import  {useContextGlobal}  from '../Components/Utils/global.context';
import axios from 'axios';
import { useEffect } from "react";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateAcc = () => {
const {userDB,setUserDB} = useContextGlobal();
const nameSurnameRegex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
// const surnameRegex = /^[a-zA-Z\s']{2,}$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
const passwordRegex = /^(?=\w*[a-z])\S{6,}$/;
const name = useInput('text', 'name',nameSurnameRegex);
const surname = useInput('text', 'surname',nameSurnameRegex)
const email = useInput('email', 'email',emailRegex)
const password = useInput('password', 'password',passwordRegex);
const confirmPassword = useInput('password', 'password',passwordRegex);
const passwordsMatch = password.value === confirmPassword.value
const [validPass,setValidPass] = useState(true)
const [invalidPassMsg,setInvalidPassMsg] = useState('')
const [msg, setMsg] = useState()
const navigate = useNavigate()

const fetchData = async () => {
  let status = undefined
  let error = undefined
  try{
    const response = await axios.post('http://localhost:8080/users/save', {
      name: name.value,
      lastname: surname.value,
      email: email.value,
      password: password.value,
      idRoles: 1
})
  status = response.status

  if (status === 201) {
    axios.post('http://localhost:8080/login', {
    username: email.value,
    password: password.value,
  })
  .then(response => {
    if (response.status === 200) {
      const {token} = response.data
      localStorage.setItem('token', token);
      localStorage.getItem('token')
    }})
    setUserDB({
      name: name.value,
      lastname: surname.value,
      email: email.value,
    });
    navigate('/'); // Usamos el hook useNavigate en lugar de useHistory
  } else if(error){
    setMsg(`Lamentablemente no ha podido registrarse. Por favor intente más tarde`)
  } else {
    setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde')
  }
  
  }catch(err){
    error = error = err.response.data.error // Obtener el mensaje de error del servidor
  }
}
const onClick = (e) =>{
  e.preventDefault();
  if(name.value !== null && surname.value !== null && email.value !== null &&
    name.value !== undefined && surname.value !== undefined && email.value !== undefined){
    if(name.isvalid && surname.isvalid && email.isvalid && password.isvalid && passwordsMatch){
      fetchData()
    }else{
      setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde');
    } 
  } else{
    setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde');
    }
  // if((!name.value || !surname.value) && (!email.isvalid && !password.isvalid && !passwordsMatch)){
  //   setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde');
  // } else {
  //   fetchData()
  // }
  if(passwordsMatch === true && password.isvalid){
    setValidPass(true)
    setInvalidPassMsg('')
  }else{
    setValidPass(false)
    setInvalidPassMsg('Las contraseñas no coinciden')
  }
}

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className='signup'>
            <Link className='closeLogin' to={'/'}><FontAwesomeIcon icon={faChevronLeft} /></Link>
        <h1>Crear Cuenta</h1>
        <form>
          <div className='signupCampos'>
            <div className='nombreApellido'>
              <div className='datoInput'>
                <label>Nombre</label>
                <input {...name} className={name.classnameinput} required/>
                <p>{name.msg}</p>
              </div>
              <div className='datoInput'>
                <label>Apellido</label>
                <input {...surname} className={surname.classnameinput} required/>
                <p>{surname.msg}</p>
              </div>
            </div>
            <div className="dato2Input">
              <label>Correo electrónico</label>
              <input {...email} className={email.classnameinput} required/>
              <p>{email.msg}</p>
            </div>
            <div className="dato2Input">
              <label>Contraseña</label>
              <input {...password} className={`${password.classnameinput} ${validPass ? '' : 'error'}`} required/>
              <p>{password.msg}</p>
            </div>
            <div className="dato2Input">
              <label>Confirmar contraseña</label>
              <input {...confirmPassword} className={`${confirmPassword.classnameinput} ${validPass ? '' : 'error'}`} required/>
              <p>{confirmPassword.msg}</p>
              <p>{invalidPassMsg}</p>
              </div>
            <input className='crearCuenta' type='submit' value="Crear cuenta" onClick={onClick}/>
          </div>
          <div className='linkLogin'>
          <p>¿Ya tienes una cuenta?</p>
          <Link to={'/login'}><p className='linkloginBoton'>Iniciar sesión</p></Link>
          </div>
        </form>
            
    </div>
  )
}

export default CreateAcc