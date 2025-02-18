import Image from "next/image";
import React from "react";
import image1 from "@/public/hero/1.png";
import image2 from "@/public/hero/2.png";
import profileImage from "@/public/hero/profile-pic.png";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className='w-screen px-4 md:px-8 flex flex-wrap'>
      {/* teks */}
      <div className='w-fit h-[70vh] lg:h-[88vh] z-10 absolute bg-transparent justify-end md:justify-start md:pt-24 flex gap-8 flex-col'>
        {" "}
        <div className='hidden md:block text-2xl lg:text-5xl font-semibold lg:leading-tight text-gray-800 w-full'>
          Let’s explore Bali the fun way <br />
          I’ll show you the real Bali <br />
          like a local!
        </div>
        <div className='block md:hidden text-3xl pr-8 leading-snug lg:text-5xl font-semibold lg:leading-tight text-gray-800 w-full'>
          Let’s explore Bali the fun way. I’ll show you the real Bali like a
          local!
        </div>
        <div className='w-fit'>
          <Button>Contact Me</Button>
        </div>
      </div>
      {/* gambar */}
      <div className='w-fit lg:w-full h-96 mb-80 lg:mb-0 lg:h-[88vh] z-0 flex flex-wrap items-start lg:items-end gap-4 justify-end '>
        <div className='h-full flex flex-1 flex-col gap-4 order-2 md:order-1 w-1/2 lg:flex-row lg:items-end lg:w-fit lg:justify-end'>
          <div className='order-3 md:order-1 h-1/4 lg:h-fit'>
            <Image
              src={image2}
              width={250}
              height={310}
              alt='1'
              className='rounded-lg h-full lg:h-fit object-cover'
            />
          </div>
          <div className='rounded-lg order-2 md:order-2 h-3/4 lg:h-fit'>
            <Image
              src={image1}
              width={260}
              height={160}
              alt='1'
              className='rounded-lg h-full lg:h-fit object-cover'
            />
          </div>
        </div>
        <div className='h-full lg:h-fit order-1 md:order-2 w-1/2 lg:w-fit'>
          <Image
            src={profileImage}
            width={470}
            height={630}
            alt='1'
            className='rounded-lg object-cover h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
