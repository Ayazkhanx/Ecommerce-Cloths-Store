// "use client";
// import React, { useState } from "react";
// import pic1 from "../public/1.20.png";
// import { MdDelete } from "react-icons/md";
// import { Button } from "@/components/ui/button";
// import { GoPlus } from "react-icons/go";
// import { HiMiniMinusSmall } from "react-icons/hi2";
// import { GoTag } from "react-icons/go";


// export default function Cart1() {
//   const [count, setCount] = useState(1);

//   const handleMinus = () => {
//     setCount(count - 1);
//   };

//   const handlePlus = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div className="grid grid-rows-2">
//       <div className="flex justify-start p-6">
//         <h1 className="text-5xl font-extrabold">Your Cart</h1>
//       </div>

//       <div className="grid grid-cols-12 mx-6">
//         <div className="grid col-span-7 gap-6 ">
//           <div className="flex gap-6">
//             <img src="1.20.png" alt="" width={80} height={80} className="rounded-md"/>
//             <div>
//               <div className="flex justify-between">
//                 <h1>Gradient Graphic T-shirt</h1>
//                 <MdDelete />
//               </div>
//               <p>
//                 size: <span className="text-gray-400">Large</span>
//               </p>
//               <p>
//                 Color: <span className="text-gray-400">White</span>
//               </p>
//               <div className="flex justify-between">
//                 <h1>$145</h1>
//                 <div className="flex items-center gap-2">
//                   <button
//                     className="bg-gray-400 rounded p-2"
//                     onClick={handleMinus}
//                   >
//                     <HiMiniMinusSmall />
//                   </button>
//                   <span>{count}</span>
//                   <button
//                     className="bg-gray-400 rounded p-2"
//                     onClick={handlePlus}
//                   >
//                     <GoPlus />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-6">
//             <img src="1.12.png" alt="" width={80} height={80} className="rounded-md"/>
//             <div>
//               <div className="flex justify-between">
//                 <h1>CHECKERED SHIRT</h1>
//                 <MdDelete />
//               </div>
//               <p>
//                 size: <span className="text-gray-400">Medium</span>
//               </p>
//               <p>
//                 Color: <span className="text-gray-400">Red</span>
//               </p>
//               <div className="flex justify-between">
//                 <h1>$180</h1>
//                 <div className="flex items-center gap-2">
//                   <button
//                     className="bg-gray-400 rounded p-2"
//                     onClick={handleMinus}
//                   >
//                     <HiMiniMinusSmall />
//                   </button>
//                   <span>{count}</span>
//                   <button
//                     className="bg-gray-400 rounded p-2"
//                     onClick={handlePlus}
//                   >
//                     <GoPlus />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-6">
//             <img src="1.13.png" alt=""  width={80} height={80} className="rounded-md"/>
//             <div>
//               <div className="flex justify-between">
//                 <h1>SKINNY FIT JEANS</h1>
//                 <MdDelete />
//               </div>
//               <p>
//                 size: <span className="text-gray-400">Large</span>
//               </p>
//               <p>
//                 Color: <span className="text-gray-400">Blue</span>
//               </p>
//               <div className="flex justify-between">
//                 <h1>$240</h1>
//                 <div className="flex items-center gap-2">
//                   <button
//                     className="bg-gray-400 rounded p-2"
//                     onClick={handleMinus}
//                   >
//                     <HiMiniMinusSmall />
//                   </button>
//                   <span>{count}</span>
//                   <button
//                     className="bg-gray-400 rounded p-2"
//                     onClick={handlePlus}
//                   >
//                     <GoPlus />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-5">
//             <div className="grid-rows-5">
//                 <div className="flex">
//                     <h1>Order Summery</h1>
//                 </div>
//                 <div className="flex justify-between ">
//                     <h1>Subtotal</h1>
//                     <h1>$565</h1>
//                 </div>
//                 <div className="flex justify-between ">
//                     <h1>Discount(-20%)</h1>
//                     <h1 className="text-red-600">$-113</h1>
//                 </div>
//                 <div className="flex justify-between ">
//                     <h1>Delivery Fee</h1>
//                     <h1>$15</h1>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between ">
//                     <h1>Total</h1>
//                     <h1>$467</h1>
//                 </div>

//                 <div className="grid grid-rows-2">
//                     <div className="flex">
//                         <GoTag />
//                     <input type="text" placeholder="add promo code" className="bg-gray-400 rounded-xl" width={200}/>
//                     <Button className="rounded-lg">Apply</Button>
//                     </div>
//                     <Button>Go to Checkout</Button>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }











"use client";
import React, { useState } from "react";
import pic1 from "../public/1.20.png";
import pic2 from "../public/1.13.png"
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { GoTag } from "react-icons/go";

export default function Cart1() {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-6">
      {/* Title */}
      <div className="flex justify-start mb-8">
        <h1 className="text-5xl font-extrabold">Your Cart</h1>
      </div>

      {/* Cart Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Products Section */}
        <div className="col-span-12 md:col-span-7 space-y-8">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="flex gap-6 p-4 border rounded-lg shadow-md">
              <img
                src={`1.${index + 20}.png`}
                alt=""
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    {index === 0 ? "Gradient Graphic T-shirt" : index === 1 ? "CHECKERED SHIRT" : "SKINNY FIT JEANS"}
                  </h2>
                  <MdDelete className="cursor-pointer text-red-500 hover:text-red-700" />
                </div>
                <p className="text-gray-600">
                  Size: <span className="text-gray-400">{index === 0 ? "Large" : index === 1 ? "Medium" : "Large"}</span>
                </p>
                <p className="text-gray-600">
                  Color: <span className="text-gray-400">{index === 0 ? "White" : index === 1 ? "Red" : "Blue"}</span>
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <h3 className="text-xl font-semibold text-green-600">
                    ${index === 0 ? "145" : index === 1 ? "180" : "240"}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-gray-400 text-white rounded p-2"
                      onClick={handleMinus}
                    >
                      <HiMiniMinusSmall />
                    </button>
                    <span>{count}</span>
                    <button
                      className="bg-gray-400 text-white rounded p-2"
                      onClick={handlePlus}
                    >
                      <GoPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-span-12 md:col-span-5 bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold">Order Summary</h2>

          <div className="flex justify-between text-lg font-medium">
            <h3>Subtotal</h3>
            <h3>$565</h3>
          </div>
          <div className="flex justify-between text-lg font-medium">
            <h3>Discount (-20%)</h3>
            <h3 className="text-red-600">-$113</h3>
          </div>
          <div className="flex justify-between text-lg font-medium">
            <h3>Delivery Fee</h3>
            <h3>$15</h3>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-semibold">
            <h3>Total</h3>
            <h3>$467</h3>
          </div>

          {/* Promo Code Section */}
          <div className="flex items-center gap-2">
            <GoTag className="text-xl text-gray-600" />
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 bg-gray-200 rounded-xl p-2"
            />
            <Button className="bg-black text-white rounded-lg px-4 py-2">Apply</Button>
          </div>

          <Button className="bg-black text-white rounded-lg w-full py-3">Go to Checkout</Button>
        </div>
      </div>
    </div>
  );
}
