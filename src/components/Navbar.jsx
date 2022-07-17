import React, {useState} from 'react'
import Logo from '../assets/Tam-03.png'
import {AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'
// import {BsArrowRight} from 'react-icons/bs'
function Navbar() {
    const [nav, setNav]= useState(false)
    const handleNav =()=>{
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
  
        <div className="flex p-6 justify-between items-center h-24 mx-auto px-4 text-white">
        {/* logo */}
        <img src={Logo} className="mt-[70px] pt-5" style={{width:"300px"}} alt="" />
        
        <div className="md:flex hidden space-x-8 mt-[70px] p-[50px]">
            
            {/* <a href="#" className='pr-[100px]'>ABOUT US</a>
            <a href="#" className='pr-[100px]'>BLOG</a>*/}
            <ul className='flex'>
                <li className='p-6 pr-[80px]'>ABOUT US</li>
                <li className='p-6 pr-[80px]'>BLOG</li>
            </ul>
            {/* button */}
        <a href="#" className=" p-[20px] text-white bg-blue-700 rounded-full mx-auto">CONTACT US</a>
        </div>

        


        <div onClick={handleNav} className="block md:hidden">

            {!nav ? <AiOutlineClose style={{marginTop:"60px"}} size={20}/> : <AiOutlineMenu style={{marginTop:"60px"}} size ={30}/>}
        </div>
        {/* mobile menu */}
        <div className={!nav ? "fixed left-0 top-0 w-[50%] h-full border-r-blue-600 bg-[#1A023D] ease-in-out duration-500" :"fixed left-[-100%]" }>

            <img src={Logo} style={{width:"300px"}} alt="" />
             <ul className="uppercase mb-5">
                 <li className='p-4 border-b border-gray-600'>ABOUT US</li>
                 <li className='p-4 border-b border-gray-600'>BLOG</li>
                 <li className='p-4 border-b border-gray-600'>CONTACT US  </li>
                 
             </ul>
                 
            </div> 
        
    </div>
  )
}

export default Navbar