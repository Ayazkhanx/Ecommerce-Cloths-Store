import React from 'react'
import pic1 from '../public/1.21.png'
import pic2 from '../public/1.20.png'
import pic3 from '../public/1.19.png'
import pic4 from '../public/1.18.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home3() {

  const images = [
    {
      id: 1,
      name: 'Polo with Contrast Trims',
      price: 212,
      image: pic1
    },
    {
      id: 2,
      name: 'Gradient Graphic T-shirt',
      price: 145,
      image: pic2
    },
    {
      id: 3,
      name: 'Polo with Tipping Details',
      price: 180,
      image: pic3
    },
    {
      id: 4,
      name: 'Black Striped T-Shirt',
      price: 130,
      image: pic4
    }
  ];

  return (
    <div className="p-10">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-bold">You might also like</h1>
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
    </div>
  )
}
