import React from "react";

const index = ({ title, icon, color, author, catName, catType, price }) => {
  return (
    <>
      <div className="  flex flex-col p-0 justify-center gap-1 mobile:w-1/4 w-11/12 bg-slate-100 rounded-3xl dark:bg-slate-200 dark:rounded-3xl">
        <div
          className={`  h-60 w-full mx-auto flex justify-center items-center mb-4 rounded-2xl ${color}`}
        >
          <img className=" h-1/4 rounded-3xl  flex flex-row" src={icon}></img>
        </div>
        <span className="bg-pink-400 rounded-2xl w-2/6 py-1 text-white text-sm text-center relative -top-60 left-36">
          {catType}
        </span>
        <span className="bg-blue-300 rounded-2xl w-2/6 py-1 text-white text-sm text-center relative -top-60 left-36">
          {catName}
        </span>

        <div className=" flex flex-col gap-3 w-5/6 mx-auto">
          <h3 className=" not-italic mobile:font-bold font-semibold mobile:text-xl text-sm mobile:leading-9 leading-6 text-right text-black">
            {title}
          </h3>
          <div className="flex justify-center gap-8 mt-4 mb-2  text-gray-500 space-x-2">
            <div className="  flex flex-nowrap gap-1">
              <span className="font-serif mobile:font-medium font-normal mobile:text-lg text-sm text-black">
                تومان
              </span>
              <span className="mobile:text-base text-xs">{price}</span>
            </div>
            <span className="  w-[140px] font-serif font-normal text-sm text-gray-700 text-right text-nowrap">
              {author}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
