import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import pic1 from '../public/1.6.png'; // Import images from the public folder
import pic2 from '../public/1.5.png';
import pic3 from '../public/1.3.png';
import pic4 from '../public/1.4.png';

function Home5() {
  return (
    <div className="p-10 m-14 rounded bg-[#F0F0F0]">
      {/* Header Section */}
      <div className="flex justify-center p-8 items-center">
        <h1 className="text-4xl font-bold">BROWSE BY DRESS STYLE</h1>
      </div>

      
      <div className="grid lg:grid-row-2 sm:grid-row-4 ">
        {/* First row of images */}
        <div className="flex h-48 gap-4">
          <Image
            src={pic1}
            alt="Dress Style 1"
            width={450}
            className="rounded-lg col-span-4" 
          />
          <Image
            src={pic2}
            alt="Dress Style 2"
            // width={250}
            className="rounded-lg col-span-8"
          />
        </div>

        <div>
        {/* Second row of images */}
        <div className="flex h-80 pt-6 gap-4 ">
          <Image
            src={pic4}
            alt="Dress Style 3"
            width={900}
            className="object-cover rounded-lg"
          />
          <Image
            src={pic3}
            alt="Dress Style 4"
            // width={250}
            // height={250}
            className="object-cover rounded-lg"
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home5;
