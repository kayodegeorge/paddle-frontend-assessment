import React, {useState} from 'react'

function ContactUs() {

  const [nav, setNav]= useState(false)
    const toggleNav =()=>{
       setNav(!nav)
    }
  return (
    <div>
        <div className={`fixed ${
        nav ? "right-0" : "right-[-100%]"
      } top-0 w-[50%] h-full border-r-blue-600 bg-[#1A023D] ease-in-out duration-500 md:hidden`}>
       
      </div>
    </div>
  )
}

export default ContactUs