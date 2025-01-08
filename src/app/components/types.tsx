"use client";

import { useState } from "react";

export default function Types() {
  const [tickedBox, setTickedBox] = useState<number | null>(null);
  const boxTypes = [
    { title: "Portfolio" }, { title: "Branding" }, { title: "Blogging" }, { title: "E-Commerce" }, { title: "Others" },
  ];

  const handleBoxClick = (box: number) => {
    setTickedBox(box);
  };
  return (
        <div className="max-w-6xl mx-auto px-4">
          <div className="col-span-5 text-left mb-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Types
            </h3>
          </div>

          {/*Mapping Method to Avoid Duplication Code*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {boxTypes.map((box, index) => (
            <div key={index} onClick={() => handleBoxClick(index)}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${tickedBox === index ? 'bg-yellow-500 shadow-lg' : 'hover:bg-yellow-500'}`}>
              <h3 className="text-lg sm:text-xl font-semibold text-white text-center">{box.title}</h3>
            </div>
          ))}
        </div>
    </div>
  );
}
