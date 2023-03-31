import React,{useEffect,useRef} from 'react';

export default function Map({center,zoom}: {center: google.maps.LatLngLiteral,zoom: number;}) {
    const ref = useRef();
    const style = {height: "400px",width:"100%"};

  useEffect(() => {
    new window.google.maps.Map(ref.current!, {
      center,
      zoom
    });
  });
  return (
    <div ref={ref} style={style} id="map" />
  )
}
