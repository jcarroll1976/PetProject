import React from 'react';
import {BsTwitter} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {ImYoutube2} from "react-icons/im";
import {AiFillInstagram, AiOutlineSearch} from "react-icons/ai";

function Navbar() {
  return (
    <header>
        <div>
          <h1 className='text-2xl font-bold'>Friends of Feral Felines</h1>

          <ul className='flex space-x-2'>
           <li>About</li>
            <li>Press</li>
          </ul>
          <div className='flex space-x-2'>
          <BsTwitter size={20}/>
          <FaFacebookF size={20}/>
          <ImYoutube2 size={30} />
          <AiFillInstagram size={20} />
          <AiOutlineSearch size={20} />
          </div>
        </div>
    </header>
  )
}

export default Navbar