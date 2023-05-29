import React from "react";
import { Marker, useMapEvents , Popup} from "react-leaflet";

export default function MarkerMaps({positionM}) {

    const map =  useMapEvents({
        click() {
            map.flyTo(positionM, map.getZoom())
        }
        })
    return (
        <div>
        <Marker position={positionM}> 
        <Popup>You are here <br /> </Popup>
        </Marker>
        </div>
    );
}
