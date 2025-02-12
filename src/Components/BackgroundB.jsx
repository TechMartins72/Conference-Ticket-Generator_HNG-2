import React from "react";
import background from "/background.png";

const BackgroundB = () => {
  return (
    <div className="w-full absolute bottom-0 left-0 z-[-1]">
      <img
        src={background}
        alt="bg"
        className="w-full h-full overflow-hidden"
      />
    </div>
  );
};

export default BackgroundB;
