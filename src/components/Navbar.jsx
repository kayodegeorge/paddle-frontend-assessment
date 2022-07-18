import React, {useState} from 'react'
import Logo from '../assets/Tam-03.png'
import {AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'
import { Link } from "react-router-dom";
// import {BsArrowRight} from 'react-icons/bs'
function Navbar() {
    const [nav, setNav]= useState(false)
    const toggleNav =()=>{
       setNav(!nav)
    }
  return (
    // <nav className="relative container m-[40px] p-4 text-white">
        
    //   <div className="flex items-center justify-between">
    //       {/* logo */}
    //       <div className="pt-2">
    //           <h1 className='text-2xl'>Metricks</h1>
    //       </div>
    //       {/* menu items */}
    //       <ul className="flex justify-between ml-[1000px]">
    //        <li className='p-4'>ABOUT US</li>
    //        <li className='p-4'>BLOG</li>
    //       </ul>
    //       {/* button */}
    //       <a href="#" className="p-3 px-6 pt-2 text-white bg-blue-900 rounded-full baseline">CONTACT US</a>
    //   </div>

    // </nav>
  
    <div className="flex justify-between items-center h-24 px-10 py-10 mx-auto text-white">
    {/* logo */}
    <div>
    <Link to ='/'>
      <img src={Logo} className="w-80 pt-7" alt="logo" />
      </Link>
    </div>

    <div className="hidden md:block">
      <ul className="flex items-center space-x-24">
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/">BLOG</Link>
        </li>
        <li>
          <Link to="/ContactUs"><a
            href="/"
            className="p-5 text-white bg-blue-700 rounded-full mx-auto"
          >
            CONTACT US
          </a></Link>
        </li>
      </ul>
    </div>

    <div onClick={toggleNav} className="block md:hidden">
      {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
    </div>

    {/* mobile menu */}
    <div
      className={`fixed ${
        nav ? "left-0" : "left-[-100%]"
      } top-0 w-[50%] h-full border-r-blue-600 bg-[#1A023D] ease-in-out duration-500 md:hidden`}
    >
      
      <Link to ='/'>
      <img src={Logo} className="w-80" alt="logo" />
      </Link>
      <ul className="uppercase mb-5">
        <li className="p-4 border-b border-gray-600">
          <Link to="/about">ABOUT US</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/">BLOG</Link>
        </li>
        <li className="p-4 border-b border-gray-600">CONTACT US </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar