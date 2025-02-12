import React from "react";

const ImageUpload = () => {
  return (
    <div className="w-full border-[1px] border-[rgb(7,55,63)] bg-[#052228] p-[24px] flex flex-col gap-4 rounded-[24px]">
      <p>Upload Profile Photo</p>
      <div className="bg-black/20 w-full">
        <div className="bg-[#0E464F] flex flex-col justify-center items-center text-center md:w-[50%] h-[240px] rounded-[32px] mx-auto cursor-pointer">
          Drag and Drop or <br /> click to Upload
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
