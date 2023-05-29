import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const LocationProduct = ({city,province,country,descriptionAddress,stars,category}) => {
  var star = []
    for(var i=0; i<stars; i++) star.push(<FontAwesomeIcon icon={faStar} />)

  return (
    <div className='locationProduct'>
      <div className="locationInfo">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="iconLocation"/>
        <div className="locationText">
          <p>{city}, {province}, {country}</p>
          <p>{descriptionAddress}</p>
        </div>
      </div>
      <div className="punctuation">
        <div className="colum1">
            <p>Muy bueno</p>
            <div className="star">
              {star}
            </div>
        </div>
        <p className='punctuationNumber'>8</p>
      </div>
    </div>
  )
}

export default LocationProduct
