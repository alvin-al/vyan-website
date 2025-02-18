import React from "react";
import SectionTitle from "../elements/SectionTitle";
import TextArea from "../elements/TextArea";
import gambar1 from "@/public/image 17.png";
import gambar2 from "@/public/hero/1.png";
import gambar3 from "@/public/hero/2.png";
import Image from "next/image";

const imageList = [
  { id: 1, src: gambar3 },
  { id: 2, src: gambar1 },
  { id: 3, src: gambar2 },
  { id: 4, src: gambar3 },
];

const Gallery = () => {
  return (
    <div className='px-8 grid'>
      <SectionTitle black>GALLERY</SectionTitle>
      <TextArea>
        <div className='text-3xl leading-snug text-gray-800 my-16'>
          Take a glimpse into the unforgettable moments of Bali! From stunning
          landscapes to amazing experiences, our gallery captures the magic of
          every journey. Let these photos inspire your next adventure!
        </div>
      </TextArea>
      <div className='grid grid-cols-2 w-full h-fit gap-6'>
        {imageList.map((item) => (
          <div key={item.id} className='w-full h-96 bg-yellow-50'>
            <Image
              src={item.src}
              alt='1'
              className='object-cover w-full h-full rounded-sm'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
