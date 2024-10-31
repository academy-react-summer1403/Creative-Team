import React from "react";

const index = () => {
  return (
    <>
      <div className="hidden mobile:block border border-gray-400 dark:bg-gray-600 w-1/4 h-2/4 rounded-3xl mt-20 flex flex-col items-end gap-6 mr-5">
        <h1 className="font-serif font-bold text-3xl text-right mr-8 mt-4 text-black dark:text-white">
          فیلتر
        </h1>
        {/* جست جو */}
        <div className="w-11/12 mx-auto mt-6">
          <div className="flex flex-row justify-end gap-2">
            <span className="text-lg font-serif text-black dark:text-white">
              جستجو
            </span>
            <img
              className="size-5 mt-2"
              src="\imgLand\search-01-stroke-rounded 1.png"
            ></img>
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-200 w-full p-3 rounded-xl"
              type="text"
            ></input>
            <img
              className="bg-blue-600 rounded-xl -mt-10 ml-1 p-2"
              src="\imgLand\search-01-stroke-rounded 2.png"
            ></img>
          </div>
        </div>
        {/* دسته یندی */}
        <div className="w-11/12 mx-auto mt-6">
          <div className="flex flex-row justify-end gap-2">
            <span className="text-lg font-serif text-black dark:text-white">
              دسته بندی
            </span>
            <img
              className="size-5 mt-2"
              src="\imgLand\cells-stroke-rounded 1.png"
            ></img>
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-200 w-full p-3 rounded-xl"
              type="text"
            ></input>
            <img
              className="-mt-10 ml-1 p-2"
              src="\imgLand\arrow-down-01.png"
            ></img>
          </div>
        </div>
        {/* سطح آموزشی */}
        <div className="w-11/12 mx-auto mt-6">
          <div className="flex flex-row justify-end gap-2">
            <span className="text-lg font-serif text-black dark:text-white">
              سطح آموزشی
            </span>
            <img
              className="size-5 mt-2"
              src="\imgLand\layers-01-stroke-rounded 2.png"
            ></img>
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-200 w-full p-3 rounded-xl"
              type="text"
            ></input>
            <img
              className="-mt-10 ml-1 p-2"
              src="\imgLand\arrow-down-01.png"
            ></img>
          </div>
        </div>
        {/* اساتید */}
        <div className="w-11/12 mx-auto mt-6">
          <div className="flex flex-row justify-end gap-2">
            <span className="text-lg font-serif text-black dark:text-white">
              اساتید
            </span>
            <img
              className="size-5 mt-2"
              src="\imgLand\teacher-stroke-rounded 1.png"
            ></img>
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-200 w-full p-3 rounded-xl"
              type="text"
            ></input>
            <img
              className="-mt-10 ml-1 p-2"
              src="\imgLand\arrow-down-01.png"
            ></img>
          </div>
        </div>
        {/* قیمتها */}
        <div className="w-11/12 mx-auto mt-6">
          <div className="flex flex-row justify-end gap-2">
            <span className="text-lg font-serif text-black dark:text-white">
              قیمت
            </span>
            <img
              className="size-5 mt-2"
              src="\imgLand\money-04-stroke-rounded 2.png"
            ></img>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <div>
              <span className="ml-2">تا</span>
              <span>1000000</span>
            </div>
            <div>
              <span className="ml-2">از</span>
              <span>1000</span>
            </div>
          </div>
          <div className="mt-2 flex flex-row justify-between">
            <input className="w-1/3" type="range"></input>
            <input className="w-1/3" type="range"></input>
          </div>
        </div>
        {/* تاریخ */}
        <div className="w-11/12 mx-auto mt-6 mb-3">
          <div className="flex flex-row justify-end gap-2">
            <span className="text-lg font-serif text-black dark:text-white">
              تاریخ برگزاری-اتمام
            </span>
            <img
              className="size-5 mt-2"
              src="\imgLand\calendar-02-stroke-rounded 2.png"
            ></img>
          </div>
          <input
            className="bg-gray-200 w-full p-3 rounded-xl text-center mt-2"
            type=""
            placeholder="خرداد 1403- اردیبهشت1403"
          ></input>
        </div>
      </div>
    </>
  );
};

export default index;
