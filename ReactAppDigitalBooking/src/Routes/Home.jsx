import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Card from '../components/Card'
import { CategoryCard } from '../Components/CategoryCard'
import axios from 'axios'
import  {useContextGlobal}  from '../Components/Utils/global.context';
import { useFetch } from "../Components/Utils/useFetch";
import Loader from '../Components/Loader'
import { SyncLoader } from 'react-spinners';
const Home = () => {
  const {cities,filterCategory,filteredData, add, startDate, endDate, titulo,loading2} = useContextGlobal();
  const [categoriesData, setCategoriesData] = useState([])
  const isLog = () => {
    const token = localStorage.getItem('token')
      if(token){
        return 'http://localhost:8080/products/list'
      }else{
        return 'http://localhost:8080/products/listRandom'
      }
  }
  const { data, loading} = useFetch(
    isLog()
  );
  
  const urlCategories = 'http://localhost:8080/categories/list'
  const fetchData = async () => {
    await axios(urlCategories)
    .then(res => setCategoriesData(res.data))
    .catch((error) => console.error(error))
  }
    useEffect(() => {
      fetchData()
  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
        {loading ? <Loader loading={loading}/> :  
        <div>
      <Search/>
      <h2  className='tituloHome'>{titulo}</h2>
        {loading2 ? 
        <div className='searchResults'>
        <SyncLoader
        color={"#1DBEB4"}
        loading={loading2}
        size={10}/>
        </div> 
        :
        <div className='searchResults'>
        {cities?.map(item =>{
          return <Card key={item.id} card={item}/>
        })}
        </div> 
      }
      <>
      <h2 className='tituloHome'>Buscar por tipo de alojamiento</h2>
      <div className='categoriesList'>
        {categoriesData?.map(category => (
        <CategoryCard category={category} filterCategory={filterCategory}  key={category.title}/>
        ))} 
        {filteredData.length > 0 ? <h2 className='tituloCategory'>{filteredData[0].categories.title} disponibles</h2> : null}
        <div className='searchResults'>
        {filteredData?.map(card => (<Card card={card} key={card.idProduct}/>))}
        </div>
      </div>
      </>
      <>
      <h2 className='tituloHome'>Recomendaciones</h2>
      <div className='containerList'>
      {data?.map( card => (
            <Card card={card} key={card.title}/>
          ))}
      </div>
      </>
      </div>}
    </>
  )
}

export default Home