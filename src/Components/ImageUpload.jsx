import React, { useCallback } from "react";
import { useContext } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { AppContext } from "../ContextAPI";
import Invalid from "./Invalid";
import { useEffect } from "react";

const ImageUpload = () => {
  useEffect(() => {}, []);

  const {
    userData,
    imageLoading,
    handleImageUpload,
    avatarErrorShow,
    setAvatarErrorShow,
    userImage,
  } = useContext(AppContext);
  const { image } = userData;
  const onDrop = useCallback(
    (droppedFile) => {
      console.log(droppedFile[0].path);
      const newFile = droppedFile[0];
      handleImageUpload(newFile);
      setAvatarErrorShow(false);
    },
    [image]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className={`w-full border-[1px] border-[rgb(7,55,63)] p-[24px] flex flex-col gap-4 rounded-[24px]`}
    >
      <p>Upload Profile Photo</p>
      <div className="w-full h-[240px] relative flex rounded-[24px] ">
        {userImage !== "" && (
          <img
            src={userImage}
            className="w-full h-full object-cover rounded-[24px]"
          />
        )}

        <div
          {...getRootProps()}
          className={`bg-[#0E464F] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center md:w-[50%] h-full rounded-[32px] mx-auto cursor-pointer ${
            userImage != "" && "opacity-[.3]"
          }`}
        >
          <input {...getInputProps()} />
          <span className="p-16">
            {imageLoading ? (
              "Loading..."
            ) : (
              <span>
                {!isDragActive ? (
                  <p>
                    <FaCloudUploadAlt className="text-4xl mx-auto mb-4" /> Drag
                    and drop or click to upload
                  </p>
                ) : (
                  "Drop here!"
                )}
              </span>
            )}
          </span>
        </div>
      </div>
      {avatarErrorShow && (
        <Invalid
          text={
            !imageLoading
              ? "Please Insert an Avatar"
              : "Wait! Avatar is loading."
          }
        />
      )}
    </div>
  );
};

export default ImageUpload;
