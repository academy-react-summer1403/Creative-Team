import React from "react";

const index = () => {
  return (
    <>
      <div className="border border-gray-400 w-[393px] h-[234px] rounded-t-3xl mt-20 flex flex-col items-end gap-3 mx-auto">
        <div className="w-[56px] h-[8px] rounded-xl bg-gray-300 mx-auto mt-1"></div>
        <div className="flex flex-row justify-center gap-48">
          <div className="mt-3">
            <img src="\imgLand\Frame 73.png"></img>
          </div>
          <div className="font-serif font-bold text-3xl text-right mr-8 mt-4">
            ترتیب
          </div>
        </div>
        <div className="my-6 mx-auto">
          <ul className="py-2">
            <li className="inline border border-gray-600 rounded-3xl mx-2 py-1 px-2 font-serif text-center font-semibold">
              ارزان ترین
            </li>
            <li className="inline border border-gray-600 rounded-3xl mx-3 py-1 px-2 font-serif text-center font-semibold">
              گران ترین
            </li>
            <li className="inline border border-gray-600 rounded-3xl mx-3 py-1 px-2 font-serif text-center font-semibold">
              محبوب ترین
            </li>
            <li className="inline border border-red-600 rounded-3xl mr-1 py-1 px-3 text-red-600 font-serif text-center font-semibold">
              جدیدترین
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
