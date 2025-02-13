import React from "react";

const Button = ({ value, icon, bg, color, outline, func, submit }) => {
  return (
    <button
      onClick={func}
      className={` button bg-${bg} text-${color} ${ outline ? "" : "" } ${
        outline && "border-[1px] border-[rgb(36,160,181)]"
      }`}
    >
      {value}
    </button>
  );
};

export default Button;
