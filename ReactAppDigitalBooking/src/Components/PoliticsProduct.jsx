import React, { useState } from 'react'

const PoliticsProduct = ({info}) => {
  const rules = info?.housesRules.split('.')
  const cancellation = info?.cancellation.split('.')
  const safetyHygiene = info?.safetyHygiene.split('.')
  return (
    <div className='politicsProduct'>
       <h2>¿Qué tenés que saber?</h2>
       <div className="info">
          <ul className=''>
          <li className='politicsTitle'>Normas de la casa</li>
            {rules?.map(item => 
              <li key={item}>{item}</li>
            )}
          </ul>
          <ul className=''>
          <li className='politicsTitle'>Salud y seguridad</li>
            {safetyHygiene?.map(item => 
              <li key={item}>{item}</li>
            )}
          </ul>
          <ul className=''>
            <li className='politicsTitle'>Política de cancelación</li>
            {cancellation?.map(item => 
              <li key={item}>{item}</li>
            )}
          </ul>
       </div>
     </div>
  )
}

export default PoliticsProduct