import React from "react";
import { clientDataTypes } from "@/types";

const ClientData = ({ qty, uom, description }: clientDataTypes) => {
  return (
    <div>
      <div className='flex text-[6rem] leading-none font-normal'>
        <div>{qty}</div>
        <div>{uom}</div>
      </div>
      <div className='text-xl text-gray-500'>{description}</div>
    </div>
  );
};

export default ClientData;
