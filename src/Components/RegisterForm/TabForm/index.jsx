import React from "react";

const index = () => {
  return (
    <>
      <div className=" flex flex-row justify-center gap-3 my-4">
        <div className="flex flex-col justify-center gap-2">
          <div className="w-[157px] h-[8px] bg-gray-300 rounded-xl"></div>
          <div className="font-normal text-sm text-center text-gray-400">
            وارد کردن اطلاعات شخصی
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="w-[157px] h-[8px] bg-gray-300 rounded-xl"></div>
          <div className="font-normal text-sm text-center text-gray-400">
            تایید کد ارسال شده
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="w-[157px] h-[8px] bg-gray-300 rounded-xl"></div>
          <div className="font-normal text-sm text-center text-gray-400 titleTab1">
            وارد کردن شماره همراه
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
