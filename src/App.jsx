import React from "react";
import BackgroundB from "./Components/BackgroundB";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import FormPage from "./Components/FormPage";
import Steps from "./Components/Steps";
import GenerateTicketPage from "./Components/GenerateTicketPage";

function App() {
  return (
    <main className="flex flex-col bg-[#02191D] text-white font-[Montserrat] min-h-screen relative px-[12px] py-8 max-lg:[48px] z-[2]">
      <Header />
      <section className="section">
        <Steps step="1" value="Ticket Selection" width="1/3" />
        {/* <HomePage /> */}
        <FormPage />
        {/* <GenerateTicketPage /> */}
      </section>
      <BackgroundB />
    </main>
  );
}

export default App;
