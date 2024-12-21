import React from 'react'
import pic3 from '../public/1.7.png'
import pic4 from '../public/1.8.png'
import pic2 from '../public/1.9.png'
import pic1 from '../public/1.10.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function Home3() {

  const images = [
    {
      id: 1,
      name: 'VERTICAL STRIPED SHIRT',
      price: 220,
      image: pic1
    },
    {
      id: 2,
      name: 'COURAGE GRAPHIC T-SHIRT',
      price: 145,
      image: pic2
    },
    {
      id: 3,
      name: 'LOOSE FIT BERMUDA SHORTS',
      price: 80,
      image: pic3
    },
    {
      id: 4,
      name: 'FADED SKINNY JEANS',
      price: 210,
      image: pic4
    }
  ];

  return (
    <div className="p-10 ">
      
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">Top Selling</h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4  mt-8">
        
        {images.map((image) => (
          <div key={image.id} className="text-start ">
            <Image 
              src={image.image}
              alt={image.name}
              width={250} 
              height={150} 
              className="object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{image.name}</h2>
            <p className="text-lg font-semibold">${image.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button >View All</Button>
      </div>
    </div>
  )
}
