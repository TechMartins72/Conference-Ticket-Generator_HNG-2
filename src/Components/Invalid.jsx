import React from "react";

const Invalid = ({ text }) => {
  return (
    <p
      className="text-red-500 w-full p-3 bg-black/50
     rounded-xl text-center font-semibold"
    >
      {text}
    </p>
  );
};

export default Invalid;
