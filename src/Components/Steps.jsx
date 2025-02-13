import React from "react";
import { useEffect } from "react";

const Steps = ({ value, width, step }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h3 className="text-3xl max-md:text-2xl">{value}</h3>
        <p>Step {step}/3</p>
      </div>
      <div className="w-full h-1 rounded-full bg-[#0E464F] relative flex">
        <div
          className={`absolute top-0 left-0 bg-[#24A0B5] h-full ${width}`}
        ></div>
      </div>
    </div>
  );
};

export default Steps;
