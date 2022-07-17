import React from 'react'

function HeroForm() {
  return (
    <div className='container mx-auto px-2 md:px-64' >
        <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2">
            <input
  type="text"
  name="name"
  placeholder="First Name.."
  class="appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
/>

        </div>
        <div className="w-full md:w-1/2">
        <input
  type="text"
  name="name"
  placeholder="Last Name.."
  class="w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
/>
<br />
        </div>
            </div> 

    </div>
  )
}

export default HeroForm