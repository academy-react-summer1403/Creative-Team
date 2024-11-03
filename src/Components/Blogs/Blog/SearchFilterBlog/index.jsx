import React from "react";

const SearchFilterBlog = () => {
  return (
    <div>
      <div className="right flex flex-col mt-36  text-right border-2  rounded-3xl p-4 gap-4 w-[300px] h-[370px] justify-around">
        <h2 className="font-bold text-2xl	">فیلتر</h2>
        <div className="flex gap-1 flex-row-reverse">
          <img
            src="./src/assets/BlogImg/search-01-stroke-rounded 1.png"
            className=""
          />
          <h2 className="font-medium text-black	text-base "> جستجو</h2>
        </div>
        <div className="bg-gray-200 rounded-2xl  w-56 flex flex-row-reverse	h-12 ml-10	">
          <input
            className="bg-gray-200 rounded-2xl w-44 h-12 pr-1	text-xs outline-none text-ellipsis text-right	border-gray-200 font-medium"
            type="text"
            placeholder="بلاگ مورد نظر را جستجو کنید"
          />
          <div className="bg-blue-400 w-12 rounded-2xl ">
            <img
              src="./src/assets/BlogImg/search-01-stroke-rounded 2.png"
              className=" my-3 mx-auto "
            />
          </div>
        </div>
        <div className="text-right ">
          <div className="flex  gap-1 mb-2 mx-36 flex-row-reverse  w-[120px]   ">
            <img
              src="./src/assets/BlogImg/cells-stroke-rounded 1.png"
              className=""
            />
            <h2 className="font-medium text-black	text-base "> دسته بندی</h2>
          </div>
          <div className="ml-10">
            <div className="bg-gray-200 rounded-2xl  w-56 mr-4	h-12	flex flex-row-reverse">
              <input
                className="bg-gray-200 rounded-2xl w-44 h-12 pr-1	text-xs outline-none ml-8	border-gray-200 font-medium"
                type="text"
                placeholder="دسته موردنظر را انتخاب کنید"
              />
              <div className=" w-12 rounded-2xl">
                <img
                  src="./src/assets/BlogImg/arrow-down-01.png"
                  className="mt-3 ml-3 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex gap-1 mb-3 mx-36 flex-row-reverse  w-[120px]">
              <img
                src="./src/assets/BlogImg/calendar-02-stroke-rounded 2.png"
                className=""
              />
              <h2 className="font-medium text-black	text-base text-nowrap">
                {" "}
                تاریخ انتشار
              </h2>
            </div>
          </div>
          <div className="ml-10">
            <div className="bg-gray-200 rounded-2xl  w-56	h-12 flex-row-reverse	flex">
              <input
                className="bg-gray-200 rounded-2xl w-44 h-12 pr-1 	text-xs outline-none	border-gray-200 font-medium"
                type="text"
                placeholder="اردیبهشت ۱۴۰۳ - ۵خرداد ۱۴۰۳"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchFilterBlog;
