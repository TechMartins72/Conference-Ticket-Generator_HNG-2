import React, { useContext } from "react";
import { AppContext } from "../ContextAPI";

const TicketList = ({ detail }) => {
  const { selected, setSelected, setHomeError } = useContext(AppContext);
  const { type, fee } = detail;
  return (
    <button
      onClick={() => {
        setSelected(!selected);
        setHomeError(false);
      }}
      className={`${
        fee == "Free"
          ? "cursor-pointer hover:bg-[#197686]"
          : "bg-transparent cursor-not-allowed"
      } ${
        selected && "bg-[#197686]"
      } border-[1px] border-[#07373F] rounded-[12px] p-[8px] text-left gap-4 outline-none transition-all duration-300 ease-in-out`}
    >
      <span>
        <p className="text-2xl mb-2 font-semibold">{fee}</p>
        <p className="md:text-xl font-semibold">{type}</p>
        <small>20/52</small>
      </span>
    </button>
  );
};

export default TicketList;
