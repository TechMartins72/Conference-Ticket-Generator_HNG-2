import React from "react";
import BackgroundB from "./Components/BackgroundB";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import FormPage from "./Components/FormPage";
import GenerateTicketPage from "./Components/GenerateTicketPage";

function App() {
  return (
    <main className="flex flex-col bg-[#02191D] text-white font-[Montserrat] min-h-screen relative px-[12px] py-8 max-lg:[48px] z-[-2]">
      <Header />
      <HomePage />
      <FormPage />
      <GenerateTicketPage />
      <BackgroundB />
    </main>
  );
}

export default App;
