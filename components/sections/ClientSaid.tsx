import React from "react";
import SectionTitle from "../elements/SectionTitle";
import TestimonialCard from "../elements/TestimonialCard";
import gambarcontoh from "@/public/image 13.png";

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

const ClientSaid = () => {
  return (
    <div className='px-8 h-screen'>
      <SectionTitle black>WHAT MY CLIENT SAID</SectionTitle>
      <div className='py-12'>
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
      <div>bermacam-macam image</div>
    </div>
  );
};

export default ClientSaid;
