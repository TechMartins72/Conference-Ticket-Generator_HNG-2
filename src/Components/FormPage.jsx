import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import ImageUpload from "./ImageUpload";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "../ContextAPI";
import Invalid from "./Invalid";
import { useEffect } from "react";
import Steps from "./Steps";

const FormPage = () => {
  const navigate = useNavigate();
  const {
    setSelected,
    setAvatarErrorShow,
    userData,
    userImage,
    setUserImage,
    setUserData,
    setImageLoading,
  } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const inputs = JSON.parse(localStorage.getItem("inputs"));
    if (inputs) {
      setValue("email", inputs.email);
      setValue("name", inputs.name);
      setValue("special", inputs.special);
    }
  }, []);

  const onSubmit = (data) => {
    if (userImage == "") {
      setAvatarErrorShow(true);
      console.log("Please upload an avatar");
    } else {
      setUserData({ ...userData, details: data });
      navigate("/ticket-generate");
    }
  };
  return (
    <>
      <Steps step="2" width="w-2/3" value="Attendee Details" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => {
          const values = getValues();
          localStorage.setItem("inputs", JSON.stringify(values));
        }}
        className="form"
      >
        <ImageUpload />
        <div className="border-t-4 border-[#07373F] py-8 flex flex-col gap-2">
          <label htmlFor="name">
            Enter your name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name", {
              required: "Name is required!",
            })}
            type="text"
            id="name"
            className="input"
          />{" "}
          {errors.name && <Invalid text={errors.name.message} />}
          <label htmlFor="name">
            Enter your email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required!",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Please provide a valid email address";
                }
              },
            })}
            type="email"
            id="email"
            className="input"
            placeholder="hello@avioflagos.io"
          />{" "}
          {errors.email && <Invalid text={errors.email.message} />}
          <label htmlFor="name">Special request?</label>
          <textarea
            {...register("special")}
            type="email"
            id="email"
            className="input h-[7rem]"
            placeholder="Declare your special request(s)"
          />
        </div>
        <div className="buttonbox">
          <input
            type="submit"
            value="Get My Free Ticket"
            className="button !bg-[#24A0B5]"
          />
          <Link to="/">
            <Button
              value="Back"
              bg="transaparent"
              outline
              func={() => {
                setSelected(false);
                localStorage.clear();
                setImageLoading(false);
                setUserImage("");
              }}
            />
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormPage;
