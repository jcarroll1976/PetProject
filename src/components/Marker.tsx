import React,{useEffect,useRef, useState} from 'react';

interface Props {
  position: google.maps.LatLngLiteral;
  map?: google.maps.Map
}

export default function Marker({position,map}:Props) {
  const [marker,setMarker] = useState<google.maps.Marker | null>(null);
  const contentString = '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<div id="bodyContent">' +
  "<p>This is an address</p>" +
  "<p>Milo is gonna whoop Denzel's ass!</p>"+
  "</div>" +
  "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "",
  });
  
  useEffect(() => {
    setMarker(new google.maps.Marker({position}));
  },[]);

  if (marker) {
    marker.setMap(map);
    marker.setPosition(position);
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }
  

  return null;
}
