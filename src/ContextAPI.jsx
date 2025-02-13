import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [selected, setSelected] = useState(false);
  const [homeError, setHomeError] = useState(false);
  const [userImage, setUserImage] = useState();
  const [imageLoading, setImageLoading] = useState(false);

  const handleSubmit = async (file) => {
    setImageLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "conference_ticket_generator_image_upload");
    data.append("cloud_name", "dnxrj96ww");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dnxrj96ww/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadedImage = await res.json();
    console.log(uploadedImage.secure_url);
    setUserImage(uploadedImage.secure_url);
    setImageLoading(false);
  };

  const handleHomeError = () => {
    if (selected == false) {
      setHomeError(true);
    } else {
      setHomeError(false);
      console.log("move to the next page");
    }
  };

  const cancel = () => {
    if (selected == true) {
      setSelected(false);
    } else return;
  };

  return (
    <AppContext.Provider
      value={{
        selected,
        setSelected,
        handleHomeError,
        homeError,
        setHomeError,
        cancel,
        userImage,
        setUserImage,
        imageLoading,
        setImageLoading,
        handleSubmit,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
