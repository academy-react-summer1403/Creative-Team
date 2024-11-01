import React from "react";

const index = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-700 dark:text-white rounded-2xl w-11/12 mx-auto flex flex-col justify-center items-end text-right">
        <div className="w-[200px]  mr-10 mt-6 font-bold text-xl">
          پروفایل من
        </div>
        <div className=" border border-red-600 flex flex-row w-11/12 mx-auto mt-2 ">
          <div className=" border border-blue-500 w-3/4 h-full">left</div>
          <div className=" border-yellow-500 w-1/4 h-full">right</div>
        </div>
      </div>
    </>
  );
};

export default index;
