import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup,useMapEvents } from 'react-leaflet'
import MarkerMaps from './MarkerMaps'

const Maps = ({latitude,longitude}) => {
  const [lat,setLat] = useState(0)
  const [long,setLong] = useState(0)
    const positionM = [lat, long]
    const defaultPosition = [-54.802131, -68.302663]
    useEffect(()=>{
      if(latitude && longitude){
        setLat(latitude)
        setLong(longitude)
      }
    },[latitude,longitude])
  return(
    <MapContainer center={defaultPosition} zoom={15} scrollWheelZoom={false}>
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
    />
    <MarkerMaps positionM={positionM}/>
  </MapContainer>
  )
}

export default Maps