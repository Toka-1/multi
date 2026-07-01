"use client";
import { useState } from "react";
import Image from "next/image";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";

export default function JoinForm() {
  const [step, setStep] = useState(1);

  // 1. Step One-ийн state-үүд
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  // 2. Step Two-ийн state-үүд
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 3. Step Three-ийн state-үүд
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleback = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white w-[480px] p-[32px] rounded-[8px] border border-gray-100 flex flex-col shadow-sm">
        <div className="mb-[32px]">
          <Image src="/Main 1.svg" alt="Logo" width={60} height={60} />
        </div>

        {/* Алхам 1 */}
        {step === 1 && (
          <StepOne
            onNext={handleNext}
            firstname={firstname}
            setFirstname={setFirstname}
            lastname={lastname}
            setLastname={setLastname}
            username={username}
            setUsername={setUsername}
          />
        )}

        {/* Алхам 2 */}
        {step === 2 && (
          <StepTwo
            onBack={handleback}
            onNext={handleNext}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}

        {/* Алхам 3 */}
        {step === 3 && (
          <StepThree
            onBack={handleback}
            onNext={handleNext}
            date={date}
            setDate={setDate}
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
          />
        )}

        {step === 4 && (
          <div className="flex flex-col items-center justify-center py-[60px] text-center">
            <h2 className="text-[26px] font-bold text-black mb-[8px]">
              You're All Set 🔥
            </h2>
            <p className="text-[16px] text-gray-400">
              We have received your submission. Thank you!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
