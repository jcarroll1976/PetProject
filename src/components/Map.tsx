import React,{ReactElement, ReactNode, useEffect,useRef, useState} from 'react';

interface Props {
  center: google.maps.LatLngLiteral
  zoom: number
  children: ReactNode
}

export default function Map({center,zoom,children}:Props) {
    const ref = useRef();
    const [map,setMap] = useState<google.maps.Map | null>(null);
    const style = {height: "400px",width:"100%"};

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current!, {}));
  },[]);

  if(map) {
    map.setCenter(center);
    map.setZoom(zoom);
  }

  return (
    <div ref={ref} style={style} id="map">
      {React.Children.map(children, (child:ReactElement) => 
        React.cloneElement(child, {map})
      )}
    </div>
  )
}
