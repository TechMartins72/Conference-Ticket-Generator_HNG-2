import React from "react";
import ticketbg from "/ticketbg.png";
import user from "/user.png";
import TicketDetails from "./TicketDetails";
import Barcode from "./Barcode";

const Ticket = () => {
  return (
    <section className="h-[650px] w-[350px] flex flex-col gap-4 items-center relative mx-auto">
      <img src={ticketbg} className="h-full w-full" />
      <div className="absolute p-[18px] h-full flex flex-col">
        <div className=" p-[8px] w-full h-fit border-[1px] border-[#24A0B5] rounded-[16px]">
          <div className="top-0 right-0 w-full ">
            <div className="rounded-[16px] flex flex-col text-center gap-8">
              <div>
                <h2 className="font-bold max-md:text-2xl text-xl mb-2 italic">
                  Techember Fest "25
                </h2>
                <span className="w-full md:text-base">
                  <p className="mb-2 text-xs">📍 04 Rumen Road, Ikoyi Lagos</p>
                  <p className="text-xs">📆 March, 15, 2025 | 7:00 PM</p>
                </span>
              </div>
              <div className="mx-auto w-auto">
                <div className="w-full h-full">
                  <img src={user} alt="" />
                </div>
              </div>
              <TicketDetails />
            </div>
          </div>
        </div>
        <Barcode />
      </div>
    </section>
  );
};

export default Ticket;
