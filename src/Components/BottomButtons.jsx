import React from "react";
import Button from "./Button";

const BottomButtons = () => {
  return (
    <div className="w-full h-fit rounded-[24px] border-[1px] border-[#0E464F] flex justify-center items-center gap-8 flex-wrap-reverse max-md:gap-4">
      <Button value="Cancel" bg="transaparent" outline />
      <Button value="Next" bg="[#24A0B5]" outline />
    </div>
  );
};

export default BottomButtons;
