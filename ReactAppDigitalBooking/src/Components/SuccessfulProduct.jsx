import React from 'react'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SuccessfulProduct = () => {
  return (
    <div className='SuccessfulProduct'>
      <div>
            <FontAwesomeIcon icon={faCheckCircle} className="checkCircle"/>
            <p className='agradecimientoSuccessful'>¡Muchas gracias!</p>
            <p className='mensajesSuccessful'>Su alojamiento se ha creado con éxito</p>
            <Link to={'/'}><button className='btnSuccessful'>volver</button></Link>
        </div>
    </div>
  )
}

export default SuccessfulProduct
