import React, { useContext } from "react";
import Banner from "./Banner";
import TicketLists from "./TicketLists";
import Numbers from "./Numbers";
import Steps from "./Steps";

const HomePage = () => {
  return (
    <>
      <Steps step="1" width="w-1/3" value="Ticket Selection" />
      <Banner homepage />
      <TicketLists />
      <Numbers />
    </>
  );
};

export default HomePage;
