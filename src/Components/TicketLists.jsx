import React from "react";
import TicketList from "./TicketList";

const TicketLists = () => {
  const details = [
    {
      type: "REGULAR ACCESS",
      fee: "Free",
    },
    {
      type: "VIP ACCESS",
      fee: "$50",
    },
    {
      type: "VVIP ACCESS",
      fee: "$150",
    },
  ];

  return (
    <div className="border-t-4 border-[#07373F] py-4">
      <div className="flex flex-col gap-4">
        <p>Select Ticket Type:</p>
        <div className="grid md:grid-cols-2 gap-8 p-[16px] bg-[#052228] border-[1px] border-[#07373F] rounded-[24px]">
          {details.map((detail, index) => (
            <TicketList detail={detail} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketLists;
