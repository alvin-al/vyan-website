import React from "react";

const Video = () => {
  return (
    <div className='px-4 md:px-8 w-screen lg:w-full'>
      <div className='w-full overflow-hidden object-cover'>
        {" "}
        {/* <Image
          src={coverImage}
          width={1300}
          height={700}
          alt='video'
          className='w-full h-fit'
        /> */}
        <div className='rounded-lg overflow-hidden'>
          <video width='4000' height='1000' autoPlay muted loop>
            <source src='/Timeline 1.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
