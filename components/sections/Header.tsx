import { Quicksand } from "next/font/google";
import Link from "next/link";
import React from "react";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

const menu = [
  { title: "About", link: "#about" },
  { title: "Popular Destination", link: "#popular" },
  { title: "Testimonial", link: "#testimonial" },
  { title: "Gallery", link: "#gallery" },
  { title: "Contact", link: "#contact" },
];

const Header = () => {
  return (
    <div
      className={`py-6 text-xl ${quicksand.className} font-bold flex flow-row relative px-4 md:px-8 text-gray-800 `}
    >
      <div className='hover:opacity-85'>
        <Link href='/'>Vyan Abimanyu</Link>
      </div>
      <div>
        <ul className='hidden lg:flex flex-row gap-4 items-center font-medium text-base absolute left-1/2 -translate-x-1/2'>
          {menu.map((item, index) => {
            return (
              <li key={index} className='hover:underline'>
                <Link href={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
