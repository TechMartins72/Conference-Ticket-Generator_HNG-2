import React, { useContext } from "react";
import Banner from "./Banner";
import TicketLists from "./TicketLists";
import Numbers from "./Numbers";

const HomePage = () => {
  return (
    <>
      <Banner homepage />
      <TicketLists />
      <Numbers />
    </>
  );
};

export default HomePage;
