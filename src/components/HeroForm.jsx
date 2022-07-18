import React from 'react'

function HeroForm() {
  return (
    <div className="">
      <div className="flex justify-center mx-auto my-10 space-x-6">
        <div>
          <input
            type="text"
            name="first name"
            placeholder="First Name.."
            class="bg-transparent px-4 py-2 border-b-2 border-gray-400 text-gray-800 outline-none focus:border-b-4"
          />
        </div>
        <div>
          <input
            type="text"
            name="last name"
            placeholder="Last Name.."
            class="bg-transparent px-4 py-2 border-b-2 border-gray-400 text-gray-800 outline-none focus:border-b-4"
          />
        </div>
      </div>

      <div className="flex lg:w-[40%] mx-auto bg-white justify-center my-10 rounded-full">
        <input
          type="email"
          placeholder="Enter your email address..."
          className=" px-6 py-4 mr-auto flex-grow rounded-full outline-none focus:border-none"
        />
        <h1 className="px-6 py-4 ml-auto bg-blue-700 text-xs md:text-md text-white rounded-full font-bold">
          JOIN OUR WAITING LIST
        </h1>
      </div>
    </div>
    
  )
}

export default HeroForm

