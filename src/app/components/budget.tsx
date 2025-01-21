"use client";

import { useState } from "react";

export default function Budget() {
  const [tickedBox, setTickedBox] = useState<number | null>(null);
  const boxTypes = [
    { title: "50 - 100" }, { title: "100 - 300" }, { title: "> 300" },
  ];

  const handleBoxClick = (box: number) => {
    setTickedBox(box);
  };
  return (
        <div className="max-w-6xl mx-auto px-4">
          <div className="col-span-5 text-left mb-4 mt-6">
            <p className="text-2xl sm:text-3xl font-bold text-white">
              Budget in RM
            </p>
          </div>

          {/*Mapping Cards Method to Avoid Duplication Code*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {boxTypes.map((box, index) => (
            <div key={index} onClick={() => handleBoxClick(index)}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${tickedBox === index ? 'bg-yellow-500 shadow-lg' : 'hover:bg-yellow-500'}`}>
              <p className="text-lg sm:text-xl font-semibold text-white text-center">{box.title}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
