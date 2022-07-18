import React from 'react'

function TimeCard() {
  return (
    <div className="container mx-auto px-10 sm:px-24 lg:px-48 xl:px-72">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      <div className="p-8 bg-white text-black rounded-md text-center space-y-2">
        <h1 className="text-4xl font-bold">7</h1>
        <p className="font-bold">Days</p>
      </div>
      <div className="p-8 bg-white text-black rounded-md text-center space-y-2">
        <h1 className="text-4xl font-bold">24</h1>
        <p className="font-bold">Hours</p>
      </div>
      <div className="p-8 bg-white text-black rounded-md text-center space-y-2">
        <h1 className="text-4xl font-bold">54</h1>
        <p className="font-bold">Minutes</p>
      </div>
      <div className="p-8 bg-white text-black rounded-md text-center space-y-2">
        <h1 className="text-4xl font-bold">11</h1>
        <p className="font-bold">Seconds</p>
      </div>
    </div>
  </div>
  )
}

export default TimeCard