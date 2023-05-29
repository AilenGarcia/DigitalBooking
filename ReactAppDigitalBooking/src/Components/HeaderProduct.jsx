import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeaderProduct = ({title,category}) => {
  return (
    <div className='headerProduct'>
        <div className="dataProduct">
            <h3>{category}</h3>
            <h2>{title}</h2>
        </div>
        <Link to={'/'}><FontAwesomeIcon className="goBack" icon={faChevronLeft} /></Link>


    </div>
  )
}

export default HeaderProduct