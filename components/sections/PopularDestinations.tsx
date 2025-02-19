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
    <div className='w-screen sm:w-full bg-yellow-50 h-fit lg:h-[100vh] relative overflow-hidden'>
      {/* BG Image */}
      <div className='z-0 overflow-hidden'>
        <Image
          src={backgroundImage}
          alt='uluwatu'
          width={1000}
          height={600}
          className='h-80 sm:h-96 w-auto sm:w-full lg:h-auto lg:w-full object-cover'
        />
      </div>
      {/* Text Above */}
      <div className='z-10 absolute top-0 text-white w-full md:h-full p-4 lg:p-8 flex flex-col justify-between lg:pb-16'>
        {/* Title */}
        <TitleSection>POPULAR TRIP DESTINATION</TitleSection>
        {/* List */}
        <div className='w-fit pt-24 sm:pt-40 lg:pt-0'>
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
