import React from 'react'

const DescriptionProduct = ({info}) => {
  return (
    <div className='descriptionProduct'>
      <h2>{info?.title}</h2>
      <p>{info?.description}</p>
    </div>
  )
}

export default DescriptionProduct