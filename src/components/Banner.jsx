import React from 'react';
import catPhoto from "../adel-grober-fd3oZD6y9po-unsplash.jpg"

function Banner() {
  return (
    <div className='w-full'>
        <img className=" w-full h-screen object-cover" src={catPhoto} alt='Cat' />
    </div>
  )
}

export default Banner