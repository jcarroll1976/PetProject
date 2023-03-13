import React from 'react';


function Navbar() {
  return (
    <div className='flex flex-col  mx-auto space-y-4 justify-center items-center'>
        <div className='flex space-x-8'>
        <p>About</p>
        <p>Cat Care</p>
        <p>Feeding Locations</p>
        <p>Resources</p>
        </div>
        
       {/*} <h2 className='text-2xl'>Help Cats During Colder Months</h2>
        <h3 className='text-xl'>How to Build An Outdoor Shelter</h3>*/}
    </div>
  )
}

export default Navbar