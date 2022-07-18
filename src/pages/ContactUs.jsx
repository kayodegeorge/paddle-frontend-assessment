import React, {useState} from 'react'
// import Navbar from '../components/Navbar'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function ContactUs() {

  const [nav, setNav]= useState(false)
    const toggleNav =()=>{
       setNav(!nav)
    }
  return (
    <div>
      
      <div className="flex lg:w-[50%] lg:ml-[1000px] w-[50%] h-full ease-in-out">
           
           <Link to="/">
           <div className=" bg-white rounded-full h-[70px] p-5 pb-5 m-5 mt-7">
             <div className="text-blue-700">
             <AiOutlineArrowRight size={35}/>
             
             </div>
             
           </div>
           </Link>
           <div className="w-full flex flex-col justify-center mx-auto">
             <h1 className='text-white font-bold text-4xl text-center mt-14'>Hey, we are still in the works,</h1>
             <h1 className='text-white font-bold text-4xl text-center mt-4'>but you can send us a message!</h1>

             
             <div className="justify-center">
               <p className='text-white mt-10 pl-10'>First Name</p>
             <input type="text" placeholder='Enter your first name' name="" className='m-10 text-gray-700 font-bold p-10 w-[80%] rounded-md border-none' />
             </div>
             <div className="justify-center">
               <p className='text-white mt-10 pl-10'>Last Name</p>
             <input type="text" placeholder='Enter your Last name' name="" className='m-10 text-gray-700 font-bold p-10 w-[80%] rounded-md border-none' />
             </div>
             <div className="justify-center">
               <p className='text-white mt-10 pl-10'>Email Address</p>
             <input type="text" placeholder='Enter your Email Address' name="" className='m-10 text-gray-700 font-bold p-10 w-[80%] rounded-md border-none' />
             </div>
             <div className="justify-center">
               <p className='text-white mt-10 pl-10'>Tell us what you need help with:</p>
             <input type="text" placeholder='Enter a Topic, like: "Channel problem..."' name="" className='m-10 text-gray-700 font-bold p-20 w-[80%] rounded-md border-none' />
             </div>
             <div className="">
               <button className='bg-blue-700 p-8 w-[30%] rounded-full text-white font-bold'>
                 SEND NOW
               </button>
             </div>
           </div>
      </div>
    </div>
  )
}

export default ContactUs