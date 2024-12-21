import { Button } from '@/components/ui/button'
import React from 'react'

export default function Tshirt3() {
  return (
    <div className='rounded m-14 grid-cols-1 sm:grid-cols-2 p-4 bg-black text-white'>
      <div className='grid-cols-1 justify-between p-4'>
        <h1 className='font-bold text-3xl'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      </div> 

      <div className='rounded grid-cols-2' >
        <input type="text" name="" id="" />
        <Button className='rounded bg-white text-black m-2'> Subscribe Now</Button>
      </div>
    </div>
  )
}
