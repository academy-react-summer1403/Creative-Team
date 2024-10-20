import React from "react";

const index = () => {
  return (
    <>
      <section className="w-[393px] bg-stone-900 mx-auto ">
        <div className=" flex flex-row justify-between">
          <div>
            <img src="\imgLand\Group 20 (2).png"></img>
          </div>
          <div className="  w-[220px] flex flex-row justify-end mr-2 my-4">
            <img className="size-30" src="\imgLand\Untitled-1 3.svg"></img>
            <img className="size-9" src="\imgLand\Untitled-1 4.svg"></img>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end gap-1 mt-20">
          <div className="text-gray-100 font-bold mr-3 mt-3">خانه</div>
          <div className="w-[370px] border border-gray-400 mx-auto "></div>
          <div className="text-gray-100 font-bold mr-3 mt-3">دوره ها</div>
          <div className="w-[370px] border border-gray-400 mx-auto"></div>
          <div className="text-gray-100 font-bold mr-3 mt-3">بلاگ ها</div>
          <div className="w-[370px] border border-gray-400 mx-auto"></div>
          <div className="text-gray-100 font-bold mr-3 mt-3">درباره ما</div>
          <div className="w-[370px] border border-gray-400 mx-auto"></div>
          <div className="text-gray-100 font-bold mr-3 mt-3">ارتباط با ما</div>
          <div className="w-[370px] border border-gray-400 mx-auto"></div>
          <div className="w-[370px] border border-gray-400 mx-auto mt-40"></div>
        </div>

        <div className="h-[100px] flex flex-row justify-center gap-5 items-center  ">
          <img src="\imgLand\instagram(1).png"></img>
          <img src="\imgLand\telegram(1).png"></img>
          <img src="\imgLand\youtube(1).png"></img>
          <img src="\imgLand\twitter(1).png"></img>
        </div>
      </section>
    </>
  );
};

export default index;
