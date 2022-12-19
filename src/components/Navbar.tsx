import React from 'react';
import {BsTwitter} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {ImYoutube2} from "react-icons/im";
import {AiFillInstagram} from "react-icons/ai";

function Navbar() {
  return (
    <header>
        <div>
          <h1 className='text-2xl font-bold'>Friends of Feral Felines</h1>

          <ul>
           <li>About</li>
            <li>Press</li>
          </ul>
          <BsTwitter />
          <FaFacebookF />
          <ImYoutube2 />
          <AiFillInstagram />
        </div>
    </header>
  )
}

export default Navbar