import React from "react";
import Steps from "./Steps";
import Button from "./Button";
import Ticket from "./Ticket";

const GenerateTicketPage = () => {
  return (
    <section className="section">
      <Steps value="Ready" step="3" width="3/3" />
      <div className="flex flex-col justify-around text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-6">
          Your Ticket is Booked!🥂
        </h2>
        <p className="max-md:text-sm">
          You can download or Check your email for a copy
        </p>
      </div>
      <Ticket />
      <div className="w-full h-fit rounded-[24px] md:border-[1px] md:border-[#0E464F] flex justify-center items-center gap-8 flex-wrap-reverse max-md:gap-4">
        <Button value="Download Another Ticket" bg="transaparent" outline />
        <Button value="Book Another" bg="[#24A0B5]" outline />
      </div>
    </section>
  );
};

export default GenerateTicketPage;
