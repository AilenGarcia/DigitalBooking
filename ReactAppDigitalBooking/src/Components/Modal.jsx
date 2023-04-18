import React, { useState } from "react";
import "./Modal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import  {useContextGlobal}  from '../Components/Utils/global.context';

export default function Modal({images}) {
  const {toggleModal,modal} = useContextGlobal();

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <button onClick={toggleModal} className="btn-modal">Ver mas...</button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Carousel>{images?.map((image) => (
            <div>
                <img key={image.title} src={image.url} className='imagesCarrousel'/>
            </div>
            ))}</Carousel>
            <button className="close-modal" onClick={toggleModal}>X</button>
          </div>
        </div>
      )}
      </>
      )
}