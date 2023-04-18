import React, { useEffect, useState } from 'react'
import imgHeart from '../images/favIcon.png';
import imgLocaliz from '../images/localizador.png';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({card}) => {
  const [image, setImage] = useState({})

  const fetchData2 = async () => {
    await axios(`http://localhost:8080/images/findProductsWithImages/${card.idProducts}`)
    .then(res => setImage(res.data[0]))
    .catch((error) => console.error(error))
}
useEffect(()=>{
  fetchData2()
},[card])
var stars = []
for(var i=0; i<card.stars; i++) stars.push(<FontAwesomeIcon icon={faStar} />)

  return (
    <div className='card'>
        <div className='cardImg'>
            <img  className='imageCard' src={image.url}/>
            <img className='heartIcon' src={imgHeart}/>
  </div>
        <div className='cardDetails'>
          <div className='categories_star'>
            <h5 style={{ opacity: '0.5'}}>{card.categories.title}</h5>
            <div className="star">
              {stars}
            </div>
            </div>
            <h1>{card.title}</h1>
            <p className='location'><img src={imgLocaliz}/>{`${card.cities.name}, ${card.cities.countries.name}`}</p>
            <p className='cardDescription'>{card.description}</p>
            <Link to={'/product/' + card.idProducts}><button>Ver detalle</button></Link>
        </div>
    </div>
  )
}

export default Card


