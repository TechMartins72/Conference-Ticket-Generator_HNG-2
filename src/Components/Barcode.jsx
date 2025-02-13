import React from "react";
import ticketcode from "/ticketcode.png";

const Barcode = () => {
  return (
    <div className="self-end h-full w-full flex items-end justify-center mb-2">
      <img src={ticketcode} alt="ticket_bar_code" />
    </div>
  );
};

export default Barcode;
