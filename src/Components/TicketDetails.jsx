import React from "react";

const TicketDetails = () => {
  return (
    <div className="rounded-[8px] text-left bg-[#08343C] p-[4px] grid grid-cols-2">
      <span className="p-[6px] border-r-[1px] border-white/50">
        <small className="text-white/50">Your name</small>
        <p className="text-[.75rem]">Joseph Martins</p>
      </span>
      <span className="p-[6px]">
        <small className="text-white/50">Your email *</small>
        <p className="text-[.75rem]">User@email.com</p>
      </span>
      <span className="p-[6px] border-t-[1px] border-r-[1px] border-white/50">
        <small className="text-white/50">Ticket Type:</small>
        <p className="text-[.75rem]">User@email.com</p>
      </span>{" "}
      <span className="p-[6px] border-t-[1px] border-white/50">
        <small className="text-white/50">Ticket for:</small>
        <p className="text-[.75rem]">User@email.com</p>
      </span>
      <span className="p-[6px] border-t-[1px] border-white/50 col-span-2">
        <small className="text-white/50">Special request?</small>
        <p className="text-[.75rem]">
          Nil ? Or the users sad story they write in there gets this whole
          space, Max of three rows
        </p>
      </span>
    </div>
  );
};

export default TicketDetails;
