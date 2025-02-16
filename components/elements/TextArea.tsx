import React, { ReactNode } from "react";

const TextArea = ({ children }: { children: ReactNode }) => {
  return <div className='pl-[35%] grid gap-16 px-8'>{children}</div>;
};

export default TextArea;
