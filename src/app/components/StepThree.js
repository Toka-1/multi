import { useState } from "react";

export const StepThree = ({
  onBack,
  onNext,
  date,
  setDate,
  imgUrl,
  setImgUrl,
}) => {
  const [dateError, setDateError] = useState("");
  const [fileError, setFileError] = useState("");

  const handleImgUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImgUrl(URL.createObjectURL(file));
    setFileError("");
  };

  const checkInput = () => {
    let Bolomjtoi = true;

    const dateUrt = date ? date.length : 0;
    const imgUrt = imgUrl ? imgUrl.length : 0;

    if (dateUrt == 0) {
      setDateError("Төрсөн өдрөө оруулна уу 😤");
      Bolomjtoi = false;
    } else {
      setDateError("");
    }

    if (imgUrt == 0) {
      setFileError("Профайл зургаа оруулна уу 😤");
      Bolomjtoi = false;
    } else {
      setFileError("");
    }

    return Bolomjtoi;
  };

  const clickCheck = () => {
    const checkInputUtga = checkInput();
    if (checkInputUtga == true) {
      onNext();
    }
  };

  const imgUrt = imgUrl ? imgUrl.length : 0;

  return (
    <>
      <h2 className="text-[26px] font-bold text-black mb-[8px]">Join Us! 😎</h2>
      <p className="text-[18px] text-gray-400 mb-[32px]">
        Please provide all current information accurately.
      </p>

      <div className="space-y-[24px] flex-grow">
        {/* Date of birth */}
        <div>
          <label className="block text-[14px] font-semibold text-gray-700 mb-[8px]">
            Date of birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`w-full h-[44px] px-[12px] border rounded-[8px] text-[14px] outline-none transition-colors text-black   ${
              dateError
                ? "border-red-500 bg-red-50"
                : "border-gray-300 text-[#8B8E95]"
            }`}
          />
          {dateError && (
            <p className="text-red-500 text-[12px] mt-[4px]">{dateError}</p>
          )}
        </div>

        <div>
          <label className="block text-[14px] font-semibold text-gray-700 mb-[8px]">
            Profile image <span className="text-red-500">*</span>
          </label>

          <label
            className={`flex flex-col items-center justify-center w-full h-[180px] border-2 border-dashed rounded-[8px] cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors ${
              fileError ? "border-red-500 bg-red-50" : "border-gray-300"
            }`}
          >
            {imgUrt > 0 ? (
              <img
                src={imgUrl}
                className="w-full h-full object-contain p-2"
                alt="preview"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <p className="text-[14px] font-medium text-gray-900">
                  Browse or Drop Image
                </p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImgUpload}
              className="hidden"
            />
          </label>

          {fileError && (
            <p className="text-red-500 text-[12px] mt-[8px]">{fileError}</p>
          )}
        </div>
      </div>

      <div className="flex gap-[16px] mt-auto">
        <button
          onClick={onBack}
          className="w-[120px] h-[44px] border border-gray-300 rounded-[8px] text-[14px] font-medium transition-colors hover:bg-gray-100 flex items-center justify-center gap-1"
        >
          <span>{"<"}</span> Back
        </button>
        <button
          onClick={clickCheck}
          className="flex-grow h-[44px] bg-black text-white rounded-[8px] text-[14px] font-medium transition-colors hover:bg-gray-800 flex items-center justify-center gap-2"
        >
          <span>Continue 3/3</span>
          <span>{">"}</span>
        </button>
      </div>
    </>
  );
};
