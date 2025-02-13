import React, { useContext } from "react";
import { Link } from "react-router";
import Button from "./Button";
import Ticket from "./Ticket";
import { AppContext } from "../ContextAPI";

const GenerateTicketPage = () => {
  const { setSelected, userData, setUserData } = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col justify-around text-center">
        <h2 className="text-xl md:text-3xl font-semibold mb-6">
          Your Ticket is Booked!
        </h2>
        <p className="">You can download or Check your email for a copy</p>
      </div>
      <Ticket />
      <div className="buttonbox">
        <Button value="Download Ticket" bg="[#24A0B5]" outline />
        <Link to="/">
          <Button
            value="Book Another Ticket"
            bg="transaparent"
            color="[#24A0B5]"
            outline
            func={() => {
              setSelected(false);
              setUserData({ image: "", details: {} });
            }}
          />
        </Link>
      </div>
    </>
  );
};

export default GenerateTicketPage;
