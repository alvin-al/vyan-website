import React from "react";
import { SectionTitleTypes } from "@/types";

const SectionTitle: React.FC<SectionTitleTypes> = ({ children, black }) => {
  return (
    <div className='w-full flex items-center gap-4'>
      <div
        className={`w-24 h-[2px] rounded-full ${
          black ? "bg-gray-800" : "bg-white"
        }`}
      />
      <div
        className={`w-fit text-base font-medium ${
          black ? "text-gray-800" : "text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionTitle;
