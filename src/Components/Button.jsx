import React from "react";

const Button = ({ value, icon, bg, color, outline, func }) => {
  return (
    <button
      onClick={func}
      className={`rounded-2xl bg-${bg} text-${color} px-2 p-[16px] cursor-pointer font-semibold w-full md:w-[250px] hover:drop-shadow-2xl ${
        outline && "border-[1px] border-[rgb(36,160,181)]"
      }`}
    >
      {value}
    </button>
  );
};

export default Button;
