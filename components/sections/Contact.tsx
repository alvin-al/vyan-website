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
    <div>
      <div className='px-8'>
        <SectionTitle black>HOW TO BOOK</SectionTitle>
      </div>
      <StepListSquare items={bookStep} />
      <TextArea>
        <div className='text-3xl leading-snug text-gray-800 mt-12'>
          Have any questions or ready to plan your Bali adventure? <br />
          Feel free to reach out! Lets connect!
        </div>
        <EmailForm />
        <ContactList />
      </TextArea>
    </div>
  );
};

export default Contact;
