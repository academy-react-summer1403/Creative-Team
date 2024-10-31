import React from "react";

const index = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center mobile:gap-3 gap-5 ">
        <h1 className="font-bold font-serif mobile:text-3xl text-xl text-black dark:text-white mt-10">
          شروع ماجراجویی جدید
        </h1>
        <p className="mobile:text-sm text-xs text-gray-500 font-serif text-center">
          یک شروع قوی برای یادگیری یک مسئله <br></br>جدید می تونه تو پیشرفت کمک
          کنه
        </p>
      </div>
    </>
  );
};

export default index;
