import React from "react";
import { Link } from "react-router";
import ImageUpload from "./ImageUpload";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "../ContextAPI";

const FormPage = () => {
  const { setSelected } = useContext(AppContext);

  const handleGenerateTicket = () => {};


  return (
    <>
      <form className="form">
        <ImageUpload />
        <div className="border-t-4 border-[#07373F] py-8 flex flex-col gap-2">
          <label htmlFor="name">
            Enter your name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="name" className="input" />{" "}
          <label htmlFor="name">
            Enter your email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="hello@avioflagos.io"
          />{" "}
          <label htmlFor="name">Special request?</label>
          <textarea
            type="email"
            id="email"
            className="input h-[7rem]"
            placeholder="Declare your special request(s)"
          />
        </div>
        <div className="buttonbox">
          <Link to="/">
            <Button
              value="Back"
              bg="transaparent"
              outline
              func={() => {
                setSelected(false);
              }}
            />
          </Link>
          <Link to="/ticket-generate">
            <Button value="Get My Free Ticket" bg="[#24A0B5]" />
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormPage;
