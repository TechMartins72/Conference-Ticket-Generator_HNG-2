import React from "react";
import background from "/background.png";

const BackgroundB = () => {
  return (
    <div className="background">
      <img
        src={background}
        alt="bg"
        className="backgroundimage"
      />
    </div>
  );
};

export default BackgroundB;
