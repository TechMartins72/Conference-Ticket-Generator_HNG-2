import React from "react";

const Banner = ({ homepage }) => {
  return (
    <div className="bg-gradient-to-br text-center from-[#07373F] to-[#0E464F] w-full rounded-[24px] border-[1px] border-[#07373F] px-[24px] py-[16px] flex flex-col gap-4">
      <h2 className="font-bold text-4xl max-md:text-2xl italic">
        Techember Fest "25
      </h2>
      {homepage && (
        <small className="md:text-base">
          Join us for an unforgettable experience <br /> at Techember Fest "25!
          Secure your spot now.
        </small>
      )}
      <span className="w-full text-sm md:text-base">
        <p className="mb-2">📍 04 Rumen Road, Ikoyi Lagos</p>
        <p>📆 March, 15, 2025 | 7:00 PM</p>
      </span>
    </div>
  );
};

export default Banner;
