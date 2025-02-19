"use client";
import React, { useState } from "react";
import { DestinationListTypes } from "@/types";

const DestinationList: React.FC<
  DestinationListTypes & { items: { name: string; link: string }[] }
> = ({ items, onItemChange }) => {
  const [activeList, setActiveList] = useState(items[0]);
  const [hoveredItem, setHoveredItem] = useState<{
    name: string;
    link: string;
  } | null>(null);

  const handleHover = (item: { name: string; link: string }) => {
    if (hoveredItem !== item) {
      setHoveredItem(item);
      onItemChange(item);
    }
  };

  const handleHoverLeave = () => {
    if (hoveredItem !== null) {
      setHoveredItem(null);
      onItemChange(activeList);
    }
  };

  const handleClick = (item: { name: string; link: string }) => {
    setActiveList(item);
    onItemChange(item);
  };

  return (
    <div>
      <ul className='text-2xl grid'>
        {items.map((item) => {
          const isActive = activeList.name === item.name;
          return (
            <li key={item.name}>
              <button
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={handleHoverLeave}
                onClick={() => handleClick(item)}
                className={`${
                  isActive ? "font-semibold underline" : ""
                } hover:font-semibold w-fit lg:py-1 py-[4px]`}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DestinationList;
