import React from "react";

const TicketList = ({ detail }) => {
  const { type, fee } = detail;
  return (
    <div
      className={`${
        fee == "Free" ? "bg-[#197686]" : "bg-transparent"
      } border-[1px] border-[#07373F] rounded-[12px] p-[8px] flex justify-between gap-4`}
    >
      <span>
        <p className="text-base font-semibold">{type}</p>
        <p>20 left!</p>
      </span>   
      <span className="h-fit bg-[#0E464F] border-[1px] border-[#2BA4B9] rounded-[8px] font-semibold text-xl p-[8px] w-[80px]">
        <p className="text-right">{fee}</p>
      </span>
    </div>
  );
};

export default TicketList;
