import React, { useState,useEffect,useRef} from 'react'
import {GoogleMapsProvider,
useGoogleMap} from "@ubilabs/google-maps-react-hooks";

const mapOptions = {
    zoom: 12,
    center: {
        lat: 43.68,
        lng: -79.43,
    },
};

export default function Map() {
    const [mapContainer,setMapContainer] = useState(null);
  return (
    <GoogleMapsProvider
        googleMapsAPIKey = {process.env.REACT_API_KEY}
        options = {mapOptions}
        mapContainer = {mapContainer}
        >
            <div className='h-[400px]' ref={(node) => setMapContainer(node)}></div>
    </GoogleMapsProvider>
  )
}
