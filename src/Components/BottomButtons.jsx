import React, { useContext } from "react";
import { Link } from "react-router";
import Button from "./Button";
import { AppContext } from "../ContextAPI";

const BottomButtons = () => {
  const { handleHomeError, cancel, selected } = useContext(AppContext);
  return (
    <div className="buttonbox">
      <Button value="Cancel" bg="transaparent" outline func={cancel} />
      <Link to={selected ? "ticket-details" : "/"}>
        <Button value="Next" bg="[#24A0B5]" outline func={handleHomeError} />
      </Link>
    </div>
  );
};

export default BottomButtons;
