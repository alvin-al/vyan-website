import React from "react";
import SectionTitle from "../elements/SectionTitle";
import TestimonialCard from "../elements/TestimonialCard";
import gambarcontoh from "@/public/image 13.png";
import gambar1 from "@/public/image 17.png";
import gambar2 from "@/public/hero/1.png";
import gambar3 from "@/public/hero/2.png";
import gambar4 from "@/public/hero/profile-pic.png";
import Image from "next/image";

const testimonialData = [
  {
    name: "Vijay",
    country: "India",
    description:
      "My experience with Vyan as a guide in Bali was truly amazing! He is very friendly, knowledgeable, and always ensures that our trip is comfortable and enjoyable. His recommendation for tourist spots and local cuisine made our vacation unforgettable!",
    profilePicture: gambarcontoh,
  },
  {
    name: "Sarah",
    country: "Netherland",
    description:
      "Having Vyan as our guide in Bali was an incredible experience! He was warm, knowledgeable, and made sure every part of our trip was smooth and enjoyable. His recommendations for must-visit places and delicious local food added so much value to our journey.",
    profilePicture: gambarcontoh,
  },
];

const imageList = [
  { id: 1, src: gambar4 },
  { id: 2, src: gambar1 },
  { id: 3, src: gambar2 },
  { id: 4, src: gambar3 },
  { id: 5, src: gambar4 },
  { id: 6, src: gambar1 },
  { id: 7, src: gambar2 },
  { id: 8, src: gambar3 },
];

const ClientSaid = () => {
  return (
    <div className='h-fit  w-screen lg:w-fit'>
      <div className='px-4 md:px-8'>
        <SectionTitle black>WHAT MY CLIENT SAID</SectionTitle>
        <div className='lg:py-12'>
          {testimonialData.map((item) => (
            <TestimonialCard
              name={item.name}
              description={item.description}
              country={item.country}
              profilePicture={item.profilePicture}
              key={item.name}
            />
          ))}
        </div>
      </div>
      <div className='mt-16 w-full h-48 flex gap-2 '>
        {imageList.map((item) => (
          <div key={item.id} className='h-full w-fit'>
            <Image
              src={item.src}
              key={item.id}
              alt='Client Photos'
              className='w-auto h-full rounded-sm object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSaid;
