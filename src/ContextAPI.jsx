import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [selected, setSelected] = useState(false);
  const [homeError, setHomeError] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [avatarErrorShow, setAvatarErrorShow] = useState(false);

  const [userData, setUserData] = useState({
    details: {},
  });

  useEffect(() => {
    const stored_image = JSON.parse(localStorage.getItem("image"));
    console.log(stored_image);
    if (stored_image !== null) {
      setUserImage(stored_image);
    } else {
      setUserImage("");
    }
  }, [userImage]);

  const handleImageUpload = async (file) => {
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
    // setUserData({
    //   ...userData,
    //   image: uploadedImage.secure_url,
    // });
    setUserImage(uploadedImage.secure_url);
    localStorage.setItem("image", JSON.stringify(uploadedImage.secure_url));
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
        handleImageUpload,
        userData,
        setUserData,
        avatarErrorShow,
        setAvatarErrorShow,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
