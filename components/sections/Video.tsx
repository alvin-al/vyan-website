import React from "react";
import Image from "next/image";
import coverImage from "@/public/image 17.png";

const Video = () => {
  return (
    <div className='px-8 '>
      <div className='w-full h-screen overflow-hidden object-cover'>
        {" "}
        <Image
          src={coverImage}
          width={1300}
          height={700}
          alt='video'
          className='w-full h-fit'
        />
      </div>
    </div>
  );
};

export default Video;
