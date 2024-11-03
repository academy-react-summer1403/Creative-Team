import React from "react";

const FilterSortBlog = () => {
  return (
    <div>
      <div className="flex flex-row-reverse gap-2  mb-8">
        <h2 className="mr-1 mt-2 text-xl	font-bold	leading-7">ترتیب</h2>
        <span className="border-2 w-28	h-10	pt-1 rounded-3xl	 font-medium	text-lg	 flex gap-1 mr-2 p-2 text-red-500 border-red-500">
          جدیدترین
          <img
            className="size-5 pt-2"
            src="./src/assets/BlogImg/cancel-01.png"
          />
        </span>
        <span className="border-2 w-28	h-10 pt-1 rounded-3xl text-nowrap font-medium	text-lg	 p-2 mr-2">
          محبوب ترین
        </span>
      </div>
    </div>
  );
};
export default FilterSortBlog;
