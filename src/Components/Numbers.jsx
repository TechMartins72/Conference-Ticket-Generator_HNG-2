import React from "react";
import BottomButtons from "./BottomButtons";

const Numbers = () => {
  return (
    <>
      <div>
        <p>Numbers of Tickets</p>
        <select className="w-full h-[48px] rounded-[12px] border-[1px] border-[#07373F] mt-2 px-4 cursor-not-allowed">
          <option value="1">1</option>
        </select>
      </div>
      <BottomButtons values={["Cancel", "Next"]} />
    </>
  );
};

export default Numbers;
