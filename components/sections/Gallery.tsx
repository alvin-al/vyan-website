"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../elements/SectionTitle";
import TextArea from "../elements/TextArea";
import Image from "next/image";
import client from "@/lib/contentful";

const Gallery = () => {
  interface ImageContent {
    fields: {
      title: string;
      file: {
        url: string;
      };
    };
  }

  const [data, setData] = useState<ImageContent[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const entry = await client.getEntry("1oBF7ps5kcfxOlFgpG9q6s");

        if (entry?.fields?.imageContent) {
          setData(entry.fields.imageContent as ImageContent[]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetch();
  }, []);

  console.log(data);

  return (
    <div className='px-4 md:px-8   w-screen lg:w-full mb-24 sm:mb-0'>
      <SectionTitle black>GALLERY</SectionTitle>
      <TextArea>
        <div className='text-wrap text-xl md:text-3xl leading-normal md:leading-normal text-gray-800 my-12 lg:my-16'>
          Take a glimpse into the unforgettable moments of Bali! From stunning
          landscapes to amazing experiences, our gallery captures the magic of
          every journey. Let these photos inspire your next adventure!
        </div>
      </TextArea>
      <div className='grid sm:grid-cols-2 w-full h-fit gap-4'>
        {data?.map((data) => (
          <div
            key={data.fields.title}
            className='w-full h-fit  md:h-96 bg-yellow-50'
          >
            <Image
              src={`https:${data.fields.file.url}`}
              alt='gallery'
              width={400}
              height={400}
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
