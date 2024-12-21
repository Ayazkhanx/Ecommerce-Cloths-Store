import { Button } from '@/components/ui/button'
import React from 'react'

export default function Cart2() {
  return (
    <div className="grid grid-cols-12 gap-4 m-8 p-4 bg-black text-white rounded-md">
      {/* Text Section: Takes 6 columns */}
      <div className="col-span-12 lg:col-span-6 p-4 flex items-center">
        <h1 className="font-bold text-3xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>

      {/* Input and Button Section: Takes 6 columns */}
      <div className="col-span-12 lg:col-span-6 justify-center items-center p-4">
        <input
          type="text"
          className="w-full p-2 rounded-lg text-black"
          placeholder="Enter your email"
        />
        <Button className="rounded bg-white w-full p-2 text-black m-2">Subscribe Now</Button>
      </div>
    </div>
  )
}
