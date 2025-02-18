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
    <div className='flex gap-4'>
      {socialLink.map((item) => (
        <Link href={item.link} key={item.title}>
          <Button variant={"outline"}>
            <span className=''>{item.icon}</span>
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default ContactList;
