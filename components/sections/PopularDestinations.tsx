"use client";
import React, { useState } from "react";
import Image from "next/image";
import TitleSection from "../elements/SectionTitle";
import DestinationList from "../elements/DestinationList";

const listDestination = [
  {
    name: "Uluwatu",
    link: "https://images.unsplash.com/photo-1588625224664-a561c1f5f619?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ubud",
    link: "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nusa Penida",
    link: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tanah Lot",
    link: "https://images.unsplash.com/photo-1553902000-e036b7d05af5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Seminyak",
    link: "https://images.unsplash.com/photo-1571984405176-5958bd9ac31d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kintamani",
    link: "https://images.unsplash.com/photo-1623042392888-1f87e36a5b64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const PopularDestinations = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    listDestination[0].link
  );

  const handleItemChange = (item: { name: string; link: string }) => {
    setBackgroundImage(item.link);
  };

  return (
    <div className='relative h-screen overflow-hidden md:h-fit bg-gray-300 lg:h-[100vh] w-screen sm:mb-0 mb-24'>
      {/* Background Image */}
      <div className='z-0 overflow-hidden'>
        <Image
          src={backgroundImage}
          alt='uluwatu'
          width={1000}
          height={600}
          className='h-lvh w-full object-cover sm:h-96 lg:h-auto'
        />
      </div>

      {/* Content Overlay */}
      <div className='absolute top-0 z-10 flex h-full w-full flex-col  justify-between p-4 text-white lg:p-8 lg:pb-16'>
        {/* Title */}
        <TitleSection>POPULAR TRIP DESTINATION</TitleSection>
        {/* List */}
        <div className='w-fit pb-8 xl:pt-40 lg:pt-0'>
          <DestinationList
            items={listDestination}
            onItemChange={handleItemChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
