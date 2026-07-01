"use client";
import { useState } from "react";

export const StepOne = ({
  onNext,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  username,
  setUsername,
}) => {
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const checkInput = () => {
    let Bolomjtoi = true;

    const firstUrt = firstname ? firstname.length : 0;
    const lastUrt = lastname ? lastname.length : 0;
    const userUrt = username ? username.length : 0;

    if (firstUrt == 0) {
      setFirstnameError("Нэрээ оруулна уу ");
      Bolomjtoi = false;
    } else {
      setFirstnameError("");
    }

    if (lastUrt == 0) {
      setLastnameError("Овгоо оруулна уу ");
      Bolomjtoi = false;
    } else {
      setLastnameError("");
    }

    if (userUrt == 0) {
      setUsernameError("Хэрэглэгчийн нэрээ оруулна уу ");
      Bolomjtoi = false;
    } else {
      setUsernameError("");
    }

    return Bolomjtoi;
  };

  const clickCheck = () => {
    const checkInputUtga = checkInput();
    if (checkInputUtga == true) {
      onNext();
    }
  };

  return (
    <>
      <div className="space-y-[16px] flex-grow">
        <div>
          <h2 className="text-[26px] font-bold text-black mb-[8px]">
            Join Us! 😎
          </h2>
          <p className="text-[18px] text-gray-400 mb-[16px]">
            Please provide all current information accurately.
          </p>

          <label className="block text-[14px] font-semibold text-gray-700 mb-[8px]">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text "
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Your first name"
            className={`w-full h-[44px] px-[12px] border rounded-[8px] text-[14px] outline-none transition-colors text-black ${
              firstnameError ? "border-red-500 bg-red-50" : "border-gray-300"
            }`}
          />
          {firstnameError && (
            <p className="text-red-500 text-[12px] mt-[4px]">
              {firstnameError}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[14px] font-semibold text-gray-700 mb-[8px]">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Your last name"
            className={`w-full h-[44px] px-[12px] border rounded-[8px] text-[14px] outline-none transition-colors text-black ${
              lastnameError ? "border-red-500 bg-red-50" : "border-gray-300"
            }`}
          />
          {lastnameError && (
            <p className="text-red-500 text-[12px] mt-[4px]">{lastnameError}</p>
          )}
        </div>

        <div>
          <label className="block text-[14px] font-semibold text-gray-700 mb-[8px]">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
            className={`w-full h-[44px] px-[12px] border rounded-[8px] text-[14px] outline-none transition-colors text-black ${
              usernameError ? "border-red-500 bg-red-50" : "border-gray-300"
            }`}
          />
          {usernameError && (
            <p className="text-red-500 text-[12px] mt-[4px]">{usernameError}</p>
          )}
        </div>
      </div>

      <div className="flex gap-[16px] mt-[24px]">
        <button
          onClick={clickCheck}
          className="flex-grow h-[44px] bg-black text-white rounded-[8px] text-[14px] font-medium transition-colors hover:bg-gray-800"
        >
          Continue 1/3 {">"}
        </button>
      </div>
    </>
  );
};
