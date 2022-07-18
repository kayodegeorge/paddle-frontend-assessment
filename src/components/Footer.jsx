import React from 'react'
import { FaYoutube,
    FaFacebookSquare,
    FaLinkedin,
    FaInstagram,
    FaTwitter
         
} from 'react-icons/fa'
// import {RiYoutubeLine} from 'react-icons/ri'

function Footer() {
  return (
    <div className=''>
        <div className="max-w-[600px] mx-auto justify-center w-full flex flex-wrap mt-[200px]">
            <div className="p-4">
            <FaYoutube size={40} />
            </div>
            <div className="p-4">
            <FaFacebookSquare size={40}/>
            </div>
            <div className="p-4">
              <FaLinkedin size={40}/>
            </div>
            <div className="p-4">
              <FaInstagram size={40}/>
            </div>
            <div className="p-4">
              <FaTwitter size={40}/>
            </div>
            
        </div>
        <div className="max-w-[600px] mx-auto justify-center w-full flex flex-wrap">
        <p className='text-gray-400 '>Terms of services</p>
        <h1 className='pl-10 text-gray-400'>Privacy policy</h1>
        
        </div>

        <p className='justify-center w-full flex mt-6 text-gray-400 '>Copyright 2021 @ Peddle Technologies. All rights reserved.</p>
        
    </div>
  )
}

export default Footer