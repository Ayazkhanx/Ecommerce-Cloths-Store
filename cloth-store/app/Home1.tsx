import React from 'react';
import pic from '../public/1.15.jpg'; 
import { Button } from '@/components/ui/button';

export default function Home1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 h-auto bg-[#F2F0F1] justify-center p-10 items-center">
      
      {/* Left side: Text Content */}
      <div className="grid col-span-1 gap-4">
        <h1 className='text-6xl font-bold '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments, designed to bring out 
          your individuality and cater to your sense of style.
        </p>
        <Button> Shop Now</Button>
      </div>

      {/* Right side: Image */}
      <div className="grid col-span-1 bg-white">
        <img src='1.15.jpg' alt="Stylish Clothes"/>
      </div>
    </div>
  );
}
