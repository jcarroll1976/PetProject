import React from 'react';
import catPhoto from "../ursa-bavcar-nNmWt0roQ-E-unsplash.jpg"

function Navbar() {
  return (
    <div className='flex flex-col space-y-4 justify-center items-center'>
        <div className='flex space-x-8'>
        <p>Cat Care</p>
        <p>Feeding Locations</p>
        <p>Resources</p>
        </div>
        <img className="h-96" src={catPhoto} alt='' />
        <h2 className='text-2xl'>Help Cats During Colder Months</h2>
        <h3 className='text-xl'>How to Build An Outdoor Shelter</h3>
    </div>
  )
}

export default Navbar