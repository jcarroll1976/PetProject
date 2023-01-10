import React from 'react';
import {BsTwitter} from "react-icons/bs";
import {FaCat, FaFacebookF} from "react-icons/fa";
import {ImYoutube2} from "react-icons/im";
import {AiFillInstagram, AiOutlineSearch} from "react-icons/ai";

function Header() {
  return (
    <header>
        <div className='flex flex-col md:flex justify-between items-center'>
          <h1 className='flex text-2xl font-bold space-x-4'><FaCat />Friends of Feral Felines</h1>
          <div className='flex space-x-2 items-center'>
            <form className='flex'>
              <input type='text' placeholder="search" />
            <AiOutlineSearch size={20} />
            </form>
            <BsTwitter size={20}/>
            <FaFacebookF size={20}/>
            <ImYoutube2 size={30} />
            <AiFillInstagram size={20} />
          </div>
        </div>
    </header>
  )
}

export default Header