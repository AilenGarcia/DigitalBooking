import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CategoryCard = ({category,filterCategory}) => {
  const [numCategorias,setnumCategorias] = useState([])
  const fetchData = async () => {
    await axios(`http://localhost:8080/products/listByCategory/${category.title}`)
    .then(res => setnumCategorias(res.data))
    .catch((error) => console.error(error))
}
useEffect(()=>{
  fetchData()
},[])
  return (

    <div className='categoryCard' >
        <img src={category.images.url} onClick={() => filterCategory(category.title)}/>
        <h3 style={{paddingLeft: '10px'}}>{category.title}</h3>
        <p style={{fontSize: '13px', paddingLeft: '10px'}}>{numCategorias.length} {category.title}</p>
    </div>
  )
}
