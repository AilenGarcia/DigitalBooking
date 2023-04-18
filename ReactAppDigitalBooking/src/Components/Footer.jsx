import React from 'react'
import IconFb from '../images/iconfb.png'
import IconIg from '../images/iconig.png'
import IconLk from '../images/iconlinkedin.png'
import IconTw from '../images/icontw.png'
import IconDb from '../images/IconDb.png'

const Footer = () => {
  return (
    <div className='footer'>
      <h5>©2023 Digital Booking</h5>
      <div className='logosFooter'>
      <img src={IconFb} alt="LogoFacebook"/>
      <img src={IconLk} alt="LogoLinkedin"/>
      <img src={IconTw} alt="LogoTwitter"/>
      <img src={IconIg} alt="LogoInstagram"/>
      </div>

    </div>
  )
}

export default Footer