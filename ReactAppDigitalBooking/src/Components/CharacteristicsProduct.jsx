import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWifi, faPaw, faTv, faSnowflake, faKitchenSet, faSquareParking, faPersonSwimming} from "@fortawesome/free-solid-svg-icons";
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

library.add(faWifi, faPaw, faTv, faSnowflake, faKitchenSet, faSquareParking, faPersonSwimming );

const CharacteristicsProduct = ({info}) => {
  return (
    <div className='characteristicsProduct'>
      <h2>¿Qué ofrece este lugar?</h2>
      <ul>
      {info?.characteristics.map(characteristic =>
      <div className='itemCharacteristics' key={characteristic.idCharacteristics}>
        <FontAwesomeIcon icon={characteristic.icons}/>
        <li>{characteristic.title}</li>
      </div>
      )}
      </ul>
    </div>
  )
}

export default CharacteristicsProduct
