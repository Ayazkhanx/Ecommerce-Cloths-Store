// 'use client'
// import { useState } from 'react'
// import pic1 from '../public/1.1.png'
// import pic2 from '../public/1.2.png'
// import { Button } from '@/components/ui/button'
// import { GoPlus } from "react-icons/go";
// import { HiMiniMinusSmall } from "react-icons/hi2";

// function Tshirt1() {
//     const [count, setCount] = useState(1)

//     const handleMinus = () => {
//         setCount(count - 1)
//     }

//     const handlePlus = () => {
//         setCount(count + 1)
//     }
//   return (
//     <div className='grid m-10 p-10 lg:grid-cols-3'>
      
//       <div className='space-y-4 h-20 w-20 lg:rounded '>
//         <img src="1.2.png" alt="" className='rounded'/>
//         <img src="1.2.png" alt="" />
//         <img src="1.1.png" alt="" />
//       </div>
//       <div className=''>
//         <img src="1.2.png" alt="" />
//       </div>

//       <div className='ml-4 space-y-4'>
//         <div className='gap-4'>
//         <h1 className='text-3xl font-bold'>One Life Graphic T-shirt</h1>
//         <h1>$260</h1>
//         <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, 
//             it offers superior comfort and style.</p>
//         </div>

//        <div>
//         <p>choose size</p>
//         <div className='flex gap-4'>
//             <Button>Small</Button>
//             <Button>Medium</Button>
//             <Button>Large</Button>
//             <Button>X-Large</Button>
//         </div>
//        </div>

//        <div className='flex flex-row gap-4'>
//        <div className='flex'>
//         <button className='bg-gray-400 rounded'><HiMiniMinusSmall onClick={handleMinus}/> {count} <GoPlus onClick={handlePlus}/> </button>
//        </div>
//        <div>
//         <Button>Add to Cart</Button>
//        </div>
//        </div>
       
//       </div>
//     </div>
//   )
// }

// export default Tshirt1


'use client'
import { useState } from 'react';
import pic1 from '../public/1.1.png';
import pic2 from '../public/1.2.png';
import { Button } from '@/components/ui/button';
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";

function Tshirt1() {
    const [count, setCount] = useState(1);

    const handleMinus = () => {
        setCount(count - 1);
    }

    const handlePlus = () => {
        setCount(count + 1);
    }

    return (
        <div className="grid grid-cols-12 gap-6 m-10 p-10">
            {/* First 3 images - 2 columns */}
            <div className="col-span-2 space-y-4">
                <img src='1.2.png' alt="Image 1" className="rounded" />
                <img src='1.1.png' alt="Image 2" className="rounded" />
                <img src='1.2.png' alt="Image 3" className="rounded" />
            </div>

            {/* Main Image - 4 columns */}
            <div className="col-span-4">
                <img src='1.2.png' alt="Main Image" className="rounded w-full" />
            </div>

            {/* Text and Buttons - 5 columns */}
            <div className="col-span-5 px-6 space-y-4">
                <h1 className="text-3xl font-bold">One Life Graphic T-shirt</h1>
                <h1>$260</h1>
                <p>
                    This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric,
                    it offers superior comfort and style.
                </p>

                {/* Size Selection */}
                <div>
                    <p>Choose size</p>
                    <div className="flex gap-4">
                        <Button>Small</Button>
                        <Button>Medium</Button>
                        <Button>Large</Button>
                        <Button>X-Large</Button>
                    </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex items-center gap-2">
                        <button className="bg-gray-400 rounded p-2" onClick={handleMinus}>
                            <HiMiniMinusSmall />
                        </button>
                        <span>{count}</span>
                        <button className="bg-gray-400 rounded p-2" onClick={handlePlus}>
                            <GoPlus />
                        </button>
                    </div>

                    <Button>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
}

export default Tshirt1;
