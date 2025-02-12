import React from "react";
import barcode from "/barcode.png";
import stamp from "/reg-stamp.svg";

const Ticket = () => {
  return (
    <section className="flex justify-center items-center w-full relative">
      <div className="bg-[#0E464F] border-2 border-white rounded-tl-[16px] rounded-bl-[16px] flex flex-col overflow-hidden relative w-full">
        <div className="flex p-[12px] gap-4">
          <div className="absolute top-4 right-4">
            <img src={stamp} alt="reg_stamp" />
          </div>
          <div id="barcode" className="h-[10rem]">
            <img src={barcode} alt="barcode" className="h-full w-auto" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold font-[Road Rage] italic">
              {" "}
              Techember <br /> Fest ”25
            </h1>
            <span className="w-full flex flex-col mt-6 gap-2">
              <small>📍 04 Rumens road, Ikoyi, Lagos</small>
              <small>📅 March 15, 2025 | 7:00 PM</small>
            </span>
          </div>
        </div>
        <div className="w-full text-[#0E464F] bg-white pl-4 font-semibold">
          <p>Ticket for 1 entry only</p>
        </div>
      </div>
      <div className="bg-[#0E464F] border-2 border-white rounded-tr-[16px] rounded-br-[16px] flex gap-4 overflow-hidden p-4 rotate-[-90deg] absolute right-0">
        <div className="flex flex-col">
          <h2 className="text-base font-semibold">Techember Fest ”25</h2>
          <small>Joseph Martins</small>
          <small>techmartins72@gmail.com</small>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
