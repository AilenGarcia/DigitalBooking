import React from 'react'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const SuccessfulBooking = () => {
  return (
    <div className='SuccessfulBooking'>
        <div>
            <FontAwesomeIcon icon={faCheckCircle} className="checkCircle"/>
            <p className='agradecimientoSuccessful'>¡Muchas gracias!</p>
            <p className='mensajesSuccessful'>Su reserva se ha realizado con éxito</p>
            <Link to={'/'}><button className='btnSuccessful'>OK</button></Link>
        </div>
    </div>
  )
}

export default SuccessfulBooking
