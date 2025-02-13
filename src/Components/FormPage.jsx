import React from "react";
import Steps from "./Steps";
import ImageUpload from "./ImageUpload";
import Button from "./Button";

const FormPage = () => {
  return (
    <>
      <form className="w-full border-[1px] border-[#0E464F] bg-[#08252B] p-[24px] flex flex-col gap-4 rounded-[32px]">
        <ImageUpload />
        <div className="border-t-4 border-[#07373F] py-8 flex flex-col gap-2">
          <label htmlFor="name">
            Enter your name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="name" className="input" />{" "}
          <label htmlFor="name">
            Enter your email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="hello@avioflagos.io"
          />{" "}
          <label htmlFor="name">Special request?</label>
          <textarea
            type="email"
            id="email"
            className="input h-[7rem]"
            placeholder="Declare your special request(s)"
          />
        </div>
        <div className="w-full h-fit rounded-[24px] flex justify-between items-center flex-wrap-reverse max-md:gap-4">
          <Button value="Cancel" bg="transaparent" outline />
          <Button value="Next" bg="[#24A0B5]" />
        </div>
      </form>
    </>
  );
};

export default FormPage;
