// import React from 'react'
// import pic1 from '../public/1.11.png'
// import pic2 from '../public/1.12.png'
// import pic3 from '../public/1.13.png'
// import pic4 from '../public/1.14.png'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'

// export default function Home3() {

//   const images = [
//     {
//       id: 1,
//       name: 'T-Shirt with Tape Details',
//       price: 150,
//       image: pic1
//     },
//     {
//       id: 2,
//       name: 'Skinny Fit Jeans',
//       price: 240,
//       image: pic2
//     },
//     {
//       id: 3,
//       name: 'Checkered Shirt',
//       price: 180,
//       image: pic3
//     },
//     {
//       id: 4,
//       name: 'Sleeve Striped T-Shirt',
//       price: 130,
//       image: pic4
//     }
//   ]
//   return (
//     <div className='grid grid-rows-2 p-10 '>
      
//       <div className='flex items-center justify-center'>
//     <h1>New Arrivals</h1>
// </div>

//       <div className='grid-cols-4 gap-4'>
//         {images.map((image) => (
//           <div key={image.id}>
//             <Image src={image.image}
//             alt='images'
//             />
//              <h2 className="text-xl font-semibold">{image.name}</h2>
//              <p className="text-center">{image.price}</p>
//           </div>
//         )
//         )}
        
//       </div>

//       <div>
//         <Button>  View All</Button>
//       </div>
//     </div>
//   )
// }



import React from 'react'
import pic1 from '../public/1.11.png'
import pic2 from '../public/1.12.png'
import pic3 from '../public/1.13.png'
import pic4 from '../public/1.14.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home3() {

  const images = [
    {
      id: 1,
      name: 'T-Shirt with Tape Details',
      price: 150,
      image: pic1
    },
    {
      id: 2,
      name: 'Skinny Fit Jeans',
      price: 240,
      image: pic2
    },
    {
      id: 3,
      name: 'Checkered Shirt',
      price: 180,
      image: pic3
    },
    {
      id: 4,
      name: 'Sleeve Striped T-Shirt',
      price: 130,
      image: pic4
    }
  ];

  return (
    <div className="p-10">
      
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">New Arrivals</h1>
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
        <Button>View All</Button>
      </div>
    </div>
  )
}
