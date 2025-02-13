import React from "react";
import { Outlet } from "react-router";
import BackgroundB from "../Components/BackgroundB";
import Header from "../Components/Header";
import HomePage from "../Components/HomePage";
import FormPage from "../Components/FormPage";
import Steps from "../Components/Steps";
import GenerateTicketPage from "../Components/GenerateTicketPage";

const RootLayouts = () => {
  return (
    <div>
      <main className="main">
        <Header />
        <section className="section">
          <Steps step="1" value="Ticket Selection" width="1/3" />
          <Outlet />
        </section>
        <BackgroundB />
      </main>
    </div>
  );
};

export default RootLayouts;
