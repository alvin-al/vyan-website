import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

const socialLink = [
  { title: "WhatsApp 1", link: "/", icon: <FaWhatsapp /> },
  { title: "WhatsApp 2", link: "/", icon: <FaWhatsapp /> },
  { title: "Instagram", link: "/", icon: <FaInstagram /> },
  { title: "Email", link: "/", icon: <LuMail /> },
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
