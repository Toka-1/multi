"use client";
import { Elsie_Swash_Caps } from "next/font/google";
import { useState } from "react";

export const StepTwo = ({ onBack, onNext }) => {
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [emailError, setemailError] = useState("");
  const [phonenumberError, setPhonenumberError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [confirmpasswordError, setConfirmpasswordError] = useState("");
  console.log(email, phonenumber, password, confirmpassword);

  const checkInput = () => {
    let Bolomjtoi = true;
    const emailUrt = email.length;
    const phonenumberUrt = phonenumber.length;
    const confirmpasswordUrt = confirmpassword.length;
    const passwordUrt = password.length;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailUrt == 0) {
      setemailError("Имэйл хаягаа оруулна уу");
      Bolomjtoi = false;
    } else if (emailRegex.test(email) == false) {
      setemailError("И-мэйл формат буруу байна");
      Bolomjtoi = false;
    }
    const phonenumberRegex = /^[0-9]+$/;
    if (phonenumberUrt == 0) {
      setPhonenumberError("Утасны дугаараа оруулна уу");
      Bolomjtoi = false;
    } else if (
      phonenumberRegex.test(phonenumber) == false ||
      phonenumberUrt < 8
    ) {
      setPhoneError(
        "Утасны дугаар зөвхөн тооноос бүрдсэн, 8-аас дээш оронтой байна",
      );
      Bolomjtoi = false;
    }

    if (confirmpasswordUrt == 0) {
      setConfirmpasswordError("Нууц үгээ оруулна уу");
      Bolomjtoi = false;
    } else if (passwordUrt < 6) {
      setpasswordError("Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой");
      Bolomjtoi = false;
    }

    if (passwordUrt == 0) {
      setpasswordError("Нууц үгээ оруулна уу");
      Bolomjtoi = false;
    } else if (password !== confirmpassword) {
      setConfirmpasswordError("Нууц үгүүд хоорондоо таарахгүй байна");
      Bolomjtoi = false;
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
      <div className="space-y-[6px] flex-grow">
        <div>
          <h2 className="text-[26px] font-bold text-black mb-[8px]">
            Join Us! 😎
          </h2>
          <p className="text-[18px] text-gray-400 mb-[8px]">
            Please provide all current information accurately.
          </p>

          <label className="block text-[14px] font-semibold text-gray-700 mb-[8px]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
            className={`w-full h-[44px] px-[12px] border rounded-[8px] text-[14px] outline-none transition-colors text-black `}
          />
          <p className="text-red-500">{emailError}</p>
        </div>

        <div>
          <label className="block text-[14px] font-semibold text-gray-700 mb-[8px]">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            placeholder="Your phone number"
            className={`w-full h-[44px] px-[12px] border rounded-[8px] text-[14px] outline-none transition-colors text-black `}
          />
          <p className="text-red-500">{phonenumberError}</p>
        </div>

        <div>
          <label className="block text-[14px] font-semibold text-gray-700 mb-[8px]">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={`w-full h-[44px] px-[12px] border rounded-[8px] text-[14px] outline-none transition-colors text-black`}
          />
          <p className="text-red-500">{passwordError}</p>
        </div>

        <div className="flex gap-[6px] flex-col">
          <label className="block text-[14px] font-semibold text-gray-700 mb-[8px]">
            Confirm password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            placeholder="••••••••"
            className={`w-full h-[44px] px-[12px] border rounded-[8px] text-[14px] outline-none transition-colors text-black`}
          />
          <p className="text-red-500">{confirmpasswordError}</p>
        </div>
      </div>
      <div className="flex gap-[16px] mt-auto">
        <button
          onClick={onBack}
          className="w-[120px] h-[44px] border border-gray-300 rounded-[8px] text-[14px] font-medium transition-colors hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={clickCheck}
          className="flex-grow h-[44px] bg-black text-white rounded-[8px] text-[14px] font-medium transition-colors hover:bg-gray-800"
        >
          Continue 2/3 {">"}
        </button>
      </div>
    </>
  );
};
