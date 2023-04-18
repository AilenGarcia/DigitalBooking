import React from 'react'
import { useState, useEffect } from 'react';
import Modal from './Modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import  {useContextGlobal}  from '../Components/Utils/global.context';

const ImagesProduct = ({images}) => {
  const {toggleModal,modal} = useContextGlobal();

  // let singleImage = null;
  //   let multipleImages = [];
    
  //   if (images.length > 0) {
  //       singleImage = <img src={images[0].url} alt={images[0].title} width='400px' height='300px' />;
        
  //       multipleImages = images.slice(0, 4).map(image => (
  //           <img key={image.idImages} src={image.url} alt={image.title} width='100px' height='75px' />
  //       ));
  //   }

  return (
    <div className='imagesProduct'>
      <div className="galery">
            <div className='single-image'>
                {images.length > 0 && 
                    <img src={images.slice(0,1)[0].url} alt='product-image' onClick={toggleModal}/>
                }
            </div>
  
            <div className='multiple-images'>
                {images.length > 3 && 
                    images.slice(1,5).map((image) => (
                        <img key={image.idImages} src={image.url}  alt='product-image' onClick={toggleModal}/>
                    ))
                }
            </div>
            </div>
        <Modal images={images} />
        <Carousel className='carrousel_mobile' autoPlay={true} showThumbs={false} infiniteLoop={true}>
          {images.map((image) => (
            <div key={image.title}>
                <img src={image.url} className='imagesCarrousel'/>
            </div>
            ))}
          </Carousel>
    </div>
  )
}

export default ImagesProduct