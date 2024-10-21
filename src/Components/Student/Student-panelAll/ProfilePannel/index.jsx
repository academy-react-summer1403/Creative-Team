import React from "react";
import MenuPannel from "../MyCourse/MenuPannel";
import SidePannel from "../MyCourse/sidePannel";

const index = () => {
  return (
    <>
      <div className="w-[1345px]  bg-black flex flex-row justify-center gap-5">
        <div className="flex flex-col w-4/5 justify-items-center my-3">
          <div className=" w-11/12 h-[80px] mx-auto flex flex-row justify-evenly gap-36">
            <div className=" flex flex-row justify-evenly gap-2 items-center">
              <div className="bg-gray-800 rounded-full w-[40px] h-[40px] cursor-pointer">
                <img className="mt-2 ml-2" src="\pannel\moon-02(1).png"></img>
              </div>
              <div className="bg-gray-800 rounded-full w-[40px] h-[40px]">
                <img
                  className="mt-2 ml-2 cursor-pointer"
                  src="\pannel\notification-02(1).png"
                ></img>
                <div className="bg-red-700 rounded-full w-[20px] h-[20px] ml-6 -mt-2 text-center text-white text-xs">
                  <span className="">2</span>
                </div>
              </div>
            </div>
            <MenuPannel />
            <div className="flex flex-row justify-end gap-2 items-center">
              <div className="text-white flex flex-col justify-center items-end">
                <span className="inline">پارسا آقایی</span>
                <span className="inline">دانشجو</span>
              </div>
              <div>
                <img src="\imgLand\Peppe – 07.png"></img>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl w-11/12 h-[800px] mx-auto flex flex-col justify-center items-end text-right"></div>
        </div>
        <SidePannel />
      </div>
    </>
  );
};

export default index;
