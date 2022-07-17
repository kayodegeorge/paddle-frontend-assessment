import React from 'react'

function TimeCard() {
  return (
      <div className="">
         <div class="container mx-auto px-2 md:px-6">
        <div class="flex flex-wrap  justify-center">
      
             <div className=" text-black rounded-md bg-white p-8 m-10 pb-10 text-center ">
            <h1 className="text-4xl font-bold">7 </h1>
            <p className='font-bold pt-2'>Days</p>
            </div>
            <div className=" text-black rounded-md bg-white p-8 m-10 text-center ">
            <h1 className="text-4xl font-bold">24 </h1>
            <p className='font-bold pt-2'>Hours</p>
            </div>
            <div className=" text-black rounded-md bg-white p-8 m-10 text-center">
            <h1 className="text-4xl font-bold">54 </h1>
            <p className='font-bold pt-2'>Minutes</p>
            </div>
            <div className=" text-black rounded-md bg-white p-8 m-10 text-center">
            <h1 className="text-4xl font-bold">11 </h1>
            <p className='font-bold pt-2'>Second</p>
            </div>

            </div>   
    </div>    
       
      </div>
        
  )
}

export default TimeCard