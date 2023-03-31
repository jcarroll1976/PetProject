import React from 'react'
import { FaCat } from 'react-icons/fa'

function Footer() {
  return (
    <div >
      <h1 className='flex text-2xl font-bold space-x-4 text-blue-400'><FaCat />Friends of Feral Felines</h1>
      <ul className='flex flex-col md:flex-row justify-between'>
        <li>About Friends of Feral Felines</li>
        <li>Contact</li>
        <li>Frequently Asked Questions</li>
        <li>Privacy</li>
        <li>Terms and Conditions</li>
        <li>Sitemap</li>
      </ul>
    </div>
  )
}

export default Footer