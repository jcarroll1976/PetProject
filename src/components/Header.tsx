import React, { useState } from 'react';
import {BsTwitter} from "react-icons/bs";
import {FaCat, FaFacebookF} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
import {ImYoutube2} from "react-icons/im";
import {AiFillInstagram, AiOutlineSearch} from "react-icons/ai";

function Header() {
  const [nav,setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <header>
        <div className='flex flex-col md:flex justify-between items-center'>
          <h1 className='flex text-3xl font-bold space-x-4 text-blue-400'><FaCat />Friends of Feral Felines</h1>
          <GiHamburgerMenu onClick={handleNav} className='absolute top-4 right-4 md:hidden' />
          {nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <span>Home</span>
                </a>
                <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <span>About</span>
                </a>
                <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <span>Skills</span>
                </a>
                <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <span>Projects</span>
                </a>
                <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <span>Contact</span>
                </a>
            </div>
         )
         : (
            ""
         )
         }
          <div className='flex space-x-2 items-center'>
            <form className='flex'>
              <input className='border-[1px] rounded-md p-1 flex border-gray-300' type='text' placeholder="search" />
            </form>
            <AiOutlineSearch size={20} />
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