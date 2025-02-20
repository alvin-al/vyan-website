import Image from "next/image";
import React from "react";
import image1 from "@/public/hero/1.png";
import image2 from "@/public/hero/2.png";
import profileImage from "@/public/hero/profile-pic.png";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className='w-full min-h-dvh px-4 lg:px-8 py-4 lg:py-0 relative flex flex-col lg:flex-row justify-between'>
      {/* Combined container for better mobile layout */}
      <div className='w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-4 md:gap-8'>
        {/* Text section */}
        <div className='w-full lg:w-auto flex flex-col gap-8 lg:pt-24 z-10 lg:absolute'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold lg:leading-snug text-gray-800'>
            <span className='hidden lg:inline'>
              Let&apos;s explore Bali the fun way <br />
              I&apos;ll show you the real Bali <br />
              like a local!
            </span>
            <span className='lg:hidden'>
              Let&apos;s explore Bali the fun way. I&apos;ll show you the real
              Bali like a local!
            </span>
          </h1>
          <div className='w-fit'>
            <Button>Contact Me</Button>
          </div>
        </div>

        {/* Images section */}
        <div className='w-full flex gap-4 '>
          <div className='h-fit lg:h-[88vh] flex flex-1 lg:flex-row gap-4 items-end lg:justify-end'>
            <div className='order-2 lg:order-1 h-96 flex flex-col md:flex-row gap-4 w-1/2 md:w-2/3 lg:w-auto lg:items-end'>
              <div className='h-[160px] md:h-full lg:h-fit w-full lg:order-2 lg:w-[260px]'>
                <Image
                  src={image1}
                  width={520}
                  height={320}
                  alt='Bali scenery 1'
                  className='rounded-lg h-full w-full object-cover'
                />
              </div>
              <div className='h-[310px] w-full lg:h-fit md:h-full lg:w-[250px]'>
                <Image
                  src={image2}
                  width={500}
                  height={620}
                  alt='Bali scenery 2'
                  className='rounded-lg h-full w-full object-cover'
                />
              </div>
            </div>
            <div className='order-1 lg:order-2 w-1/2 lg:w-auto h-96 md:w-1/3 lg:h-[630px]'>
              <Image
                src={profileImage}
                width={470}
                height={630}
                alt='Profile'
                className='rounded-lg object-cover h-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
