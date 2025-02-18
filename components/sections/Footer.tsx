import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className='w-full text-sm font-medium px-4 md:px-8 py-2 border-gray-800 border-t flex justify-between '>
      © 2025 Vyan Abimanyu{" "}
      <span>
        Website by
        <span className='ml-1 underline hover:text-blue-800'>
          <Link href='https://alvinxal.my.id'>Alvin Al</Link>
        </span>
      </span>
    </div>
  );
};

export default Footer;
