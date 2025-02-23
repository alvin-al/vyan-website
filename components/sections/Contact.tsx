import React from "react";
import SectionTitle from "../elements/SectionTitle";
import StepListSquare from "../elements/StepListSquare";
import TextArea from "../elements/TextArea";
import EmailForm from "../elements/EmailForm";
import ContactList from "../elements/ContactList";

const bookStep = [
  {
    no: 1,
    title: "Contact Me",
    description:
      "Reach out via WhatsApp or email to check availability and discuss your travel plans.",
  },
  {
    no: 2,
    title: "Confirm Your Booking",
    description:
      "Choose your preferred tour package, finalize the itinerary, and make a deposit if required.",
  },
  {
    no: 3,
    title: "Enjoy Your Trip",
    description:
      "Meet me at the agreed location and enjoy a hassle-free, personalized Bali experience!",
  },
];

const Contact = () => {
  return (
    <div className='w-screen lg:w-full mb-12 scroll-mt-8' id='contact'>
      <div className='px-4 md:px-8'>
        <SectionTitle black>HOW TO BOOK</SectionTitle>
      </div>
      <StepListSquare items={bookStep} />
      <div className='px-4 md:px-8 lg:px-0 w-screen lg:w-full'>
        <TextArea>
          <div className=' w-fit text-xl md:text-3xl leading-normal text-gray-800 lg:mt-12'>
            Have any questions or ready to plan your Bali adventure? <br />
            Lets connect!
          </div>
          <EmailForm />
          <div className=' w-fit text-lg leading-normal text-gray-800 lg:mt-12 mb-4'>
            Feel free to DM me on any of these platforms:
          </div>
          <ContactList />
        </TextArea>
      </div>
    </div>
  );
};

export default Contact;
