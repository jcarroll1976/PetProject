import React from 'react'
import outdoorCat from "../pexels-jody-parks-3664496.jpg"

function CatCare() {
  return (
    <div className='w-full h-[700px]'>
      <div className='w-[50%] h-[90%]'>
      <img className=" w-full h-full object-cover" src={outdoorCat} alt="" />
      <div>
        <h2 className='text-xl'>Cat Care</h2>
      </div>
      </div>   
    </div>
  )
}

export default CatCare