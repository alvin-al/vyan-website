import React from "react";
import ClientData from "../elements/ClientData";
import TextArea from "../elements/TextArea";

const clientDataContent = [
  { qty: 50, uom: "+", description: "Popular Destination" },
  { qty: 150, uom: "+", description: "Experience Guide" },
  { qty: 95, uom: "%", description: "Customer Satisfaction" },
];

const About = () => {
  return (
    <div className='w-screen px-4 md:px-8 lg:py-20'>
      <TextArea>
        <div className='text-wrap text-xl md:text-3xl leading-normal md:leading-normal text-gray-800'>
          Hey, I’m Vyan! I’ve been showing travelers around this island for
          years. No rushed schedules or tourist traps—just epic spots, hidden
          gems, and good vibes. <br />
          <br /> Whether you want to chase waterfalls, find the best local eats,
          or just chill on the beach, I’ve got you covered. Let’s make your Bali
          trip one to remember!
        </div>
        <div className='grid grid-cols-2 gap-y-8 lg:grid-cols-3 text-gray-800'>
          {clientDataContent.map((item) => (
            <ClientData
              qty={item.qty}
              uom={item.uom}
              description={item.description}
              key={item.description}
            />
          ))}
        </div>
      </TextArea>
    </div>
  );
};

export default About;
