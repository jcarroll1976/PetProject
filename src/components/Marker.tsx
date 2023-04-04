import React,{useEffect,useRef, useState} from 'react';

export default function Marker({position,map}: {position: google.maps.LatLngLiteral;map?:google.maps.Map}) {
  const [marker,setMarker] = useState<google.maps.Marker | null>(null);
  useEffect(() => {
    setMarker(new google.maps.Marker({position}));
  },[]);

  if (marker) {
    marker.setMap(map);
    marker.setPosition(position);
  }
  
  return null;
}
