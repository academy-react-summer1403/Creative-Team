import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AccauntInfo from "./AccauntInfo";
import ImagesProfile from "./ImagesProfile";
import Location from "./Location";
import Links from "./Links";
import SideProfilePannel from "./SideProfilePannel";

const index = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-700 dark:text-white rounded-2xl w-11/12 h-full mx-auto flex flex-col justify-end items-end text-right">
        <div className="w-[200px]  mr-10 mt-6 font-bold text-xl text-black dark:text-white">
          پروفایل من
        </div>
        <div className="  flex flex-row gap-3 w-11/12 h-[700px] mx-auto mt-8 ">
          <div className=" w-3/4 h-full">
            <AccauntInfo />
            <Outlet />
            {/* <ImagesProfile /> */}
            {/* <Location /> */}
            {/* <Links /> */}
          </div>

          <div className="border border-r-gray-400"></div>
          <SideProfilePannel />
        </div>
      </div>
    </>
  );
};

export default index;
