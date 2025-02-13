import React from "react";
import BottomButtons from "./BottomButtons";
import Invalid from "./Invalid";
import { useContext } from "react";
import { AppContext } from "../ContextAPI";

const Numbers = () => {
  const { homeError } = useContext(AppContext);
  return (
    <>
      <div>
        <p>Numbers of Tickets</p>
        <select className="w-full h-[48px] rounded-[12px] border-[1px] border-[#07373F] mt-2 px-4 cursor-pointer">
          <option value="1" className="outline-none border-none">
            1
          </option>
        </select>
      </div>
      {homeError && <Invalid text="Please select a ticket type" />}
      <BottomButtons values={["Cancel", "Next"]} />
    </>
  );
};

export default Numbers;
