import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

const socialLink = [
  {
    title: "WhatsApp 1",
    link: "https://wa.me/+6281238423177",
    icon: <FaWhatsapp />,
  },
  {
    title: "WhatsApp 2",
    link: "https://wa.me/+6282146798282",
    icon: <FaWhatsapp />,
  },
  { title: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
  { title: "Email", link: "mailto:novussofia@gmail.com", icon: <LuMail /> },
];

const ContactList = () => {
  return (
    <div className='flex flex-wrap w-fit h-full gap-4 lg:gap-4'>
      {socialLink.map((item) => (
        <Button
          variant='outline'
          className='flex items-center gap-2'
          key={item.title}
          asChild
        >
          <Link href={item.link}>
            <span>{item.icon}</span>
            {item.title}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default ContactList;
