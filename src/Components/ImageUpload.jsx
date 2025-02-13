import React, { useCallback } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { AppContext } from "../ContextAPI";

const ImageUpload = () => {
  const { userImage, imageLoading, handleSubmit } = useContext(AppContext);
  const onDrop = useCallback((droppedFile) => {
    console.log(droppedFile[0].path);
    const newFile = droppedFile[0];
    handleSubmit(newFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className={`w-full border-[1px] border-[rgb(7,55,63)] p-[24px] flex flex-col gap-4 rounded-[24px]`}
    >
      <p>Upload Profile Photo</p>
      <div
        className={`w-full ${
          userImage ? `bg-[url(${userImage})]` : "bg-transparent"
        } bg-cover`}
      >
        <div
          {...getRootProps()}
          className={`bg-[#0E464F] flex flex-col justify-center items-center text-center md:w-[50%] h-[240px] rounded-[32px] mx-auto cursor-pointer ${
            userImage != undefined && "opacity-[.5]"
          }`}
        >
          <input {...getInputProps()} />
          <span>
            {imageLoading ? (
              "loading"
            ) : (
              <p>
                {!isDragActive
                  ? "Drag and drop or click to upload"
                  : "Drop here!"}
              </p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
