import Image from "next/image";
import React from "react";
import image1 from "@/public/hero/1.png";
import image2 from "@/public/hero/2.png";
import profileImage from "@/public/hero/profile-pic.png";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className='w-full px-8 '>
      <div className='w-fit z-10 absolute bg-transparent pt-24 flex gap-8 flex-col'>
        {" "}
        <div className='text-5xl font-semibold leading-tight text-gray-800 w-full'>
          Let’s explore Bali the fun way <br />
          I’ll show you the real Bali <br />
          like a local!
        </div>
        <div className='w-fit'>
          <Button>Contact Me</Button>
        </div>
      </div>
      <div className='w-full pt-16 z-0 flex items-end justify-end gap-4'>
        {" "}
        <div className=' rounded-lg overflow-hidden'>
          <Image src={image2} width={250} height={310} alt='1' />
        </div>
        <div className=' rounded-lg overflow-hidden'>
          <Image src={image1} width={260} height={160} alt='1' />
        </div>
        <div className=' rounded-lg overflow-hidden'>
          <Image src={profileImage} width={470} height={630} alt='1' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
