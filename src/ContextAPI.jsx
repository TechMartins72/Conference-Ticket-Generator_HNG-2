import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [selected, setSelected] = useState(false);
  const [homeError, setHomeError] = useState(false);

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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
