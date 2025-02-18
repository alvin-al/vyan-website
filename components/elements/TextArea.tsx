import React, { ReactNode } from "react";

const TextArea = ({ children }: { children: ReactNode }) => {
  return <div className=' lg:pl-[35%] grid gap-16 lg:w-full'>{children}</div>;
};

export default TextArea;
