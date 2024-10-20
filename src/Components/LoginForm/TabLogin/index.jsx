import React from "react";

const index = () => {
  return (
    <>
      <div className=" mobile:flex mobile:flex-row mobile:justify-center  flex flex-col-reverse items-center mobile:gap-3 gap-5 my-4">
        <div className="flex flex-col justify-center gap-3 mt-5">
          <div className="mobile:w-[157px] w-[390px] h-[8px] bg-gray-300 rounded-xl"></div>
          <div className="font-normal text-sm text-center text-gray-400 flex flex-col">
            <span>تایید کد ارسال شده دو مرحله‌ای</span>
            <span className="text-xs">( درصورت فعال بودن دو مرحله‌ای )</span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="mobile:w-[157px] w-[390px] h-[7px] bg-gray-300 rounded-xl"></div>
          <div className="font-normal text-sm text-center text-gray-400">
            واردکردن شماره همراه
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
