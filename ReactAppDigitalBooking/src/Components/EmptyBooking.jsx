import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const EmptyBooking = () => {
  return (
    <>
        <div className='emptyBooking'>
            <div className='emptyBookingContent'>
            <FontAwesomeIcon icon={faTriangleExclamation} beat size="2xl" className='faTriangle'/>
            <h3>Aún no has efectuado ninguna reserva</h3>
            <Link to={'/'} className='goBackBtn'>Ir atrás</Link>
            </div>

        </div>
    </>
  )
}

export default EmptyBooking