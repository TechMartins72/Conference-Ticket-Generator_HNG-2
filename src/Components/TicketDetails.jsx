import React from "react";
import { useContext } from "react";
import { AppContext } from "../ContextAPI";

const TicketDetails = () => {
  const { userData } = useContext(AppContext);
  const {
    details: { name, email, special },
  } = userData;
  const text = () => {
    if (special?.length > 30) {
      console.log(special.substring(0, 30));
      return special.substring(0, 30) + "...";
    } else {
      return special;
    }
  };
  const emailText = () => {
    if (email?.length > 20) {
      console.log(email.substring(0, 17));
      return email.substring(0, 17) + "...";
    } else {
      return email;
    }
  };

  return (
    <div className="rounded-[8px] text-left bg-[#08343C] p-[4px] grid grid-cols-2">
      <span className="p-[6px] border-r-[1px] border-white/50">
        <small className="text-white/50">Your name</small>
        <p className="text-[.75rem]">{name}</p>
      </span>
      <span className="p-[6px]">
        <small className="text-white/50">Your email *</small>
        <p className="text-[.75rem]">{emailText()}</p>
      </span>
      <span className="p-[6px] border-t-[1px] border-r-[1px] border-white/50">
        <small className="text-white/50">Ticket Type:</small>
        <p className="text-[.75rem]">Regular</p>
      </span>{" "}
      <span className="p-[6px] border-t-[1px] border-white/50">
        <small className="text-white/50">Ticket for:</small>
        <p className="text-[.75rem]">1</p>
      </span>
      {special && (
        <span className="p-[6px] border-t-[1px] border-white/50 col-span-2">
          <small className="text-white/50">Special request?</small>
          <p className="text-[.75rem]">{text()}</p>
        </span>
      )}
    </div>
  );
};

export default TicketDetails;
