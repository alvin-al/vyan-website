import { StepListSquareTypes } from "@/types";
import React from "react";

const StepListSquare = ({ items }: { items: StepListSquareTypes[] }) => {
  return (
    <div className='border-y border-gray-800 divide-y sm:divide-y-0 sm:divide-x divide-gray-800 grid sm:grid-cols-3 lg:grid-cols-3 my-12'>
      {items.map((item: StepListSquareTypes) => (
        <div key={item.no} className='p-6 lg:p-10'>
          <div className='text-6xl'>0{item.no}.</div>
          <div className='pt-12 font-semibold text-xl'>{item.title}</div>
          <div className='pt-4 w-11/12'>{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default StepListSquare;
