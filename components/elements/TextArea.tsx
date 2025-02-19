import React, { ReactNode } from "react";

const TextArea = ({ children }: { children: ReactNode }) => {
  return <div className='lg:pl-[35%] grid lg:w-full'>{children}</div>;
};

export default TextArea;
