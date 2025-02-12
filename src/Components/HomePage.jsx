import React from "react";
import Banner from "./Banner";
import TicketLists from "./TicketLists";
import Numbers from "./Numbers";
import Steps from "./Steps";

const HomePage = () => {
  return (
    <section className="section">
      <Steps step="1" value="Ticket Selection" width="1/3" />
      <Banner />
      <TicketLists />
      <Numbers />
    </section>
  );
};

export default HomePage;
