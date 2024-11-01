import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AccauntInfo from "./AccauntInfo";
import ImagesProfile from "./ImagesProfile";
import Location from "./Location";
import Links from "./Links";

const index = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-700 dark:text-white rounded-2xl w-11/12 mx-auto flex flex-col justify-end items-end text-right">
        <div className="w-[200px]  mr-10 mt-6 font-bold text-xl text-black dark:text-white">
          پروفایل من
        </div>
        <div className=" flex flex-row gap-3 w-11/12 mx-auto mt-8 ">
          <Outlet />
          {/* اطلاعات حساب کاربری */}
          {/* <AccauntInfo /> */}

          {/* عکس ها */}
          {/* <ImagesProfile /> */}

          {/* محل سکونت */}
          {/* <Location /> */}
          {/* لینک ها */}
          <Links />
          <div className="border border-r-gray-400"></div>
          <div className=" w-1/4">
            <ul className="">
              <NavLink
                to="/accauntInfo"
                className="cursor-pointer text-gray-500 text-sm font-bold mb-6"
              >
                اطلاعات حساب کاربری
              </NavLink>
              <NavLink
                to="/ImagesProfile"
                className="cursor-pointer text-gray-500 text-sm font-bold my-6"
              >
                عکس ها{" "}
              </NavLink>
              <NavLink
                to="/Location"
                className="cursor-pointer text-gray-500 text-sm font-bold my-6"
              >
                محل سکونت
              </NavLink>
              <NavLink
                to="/Links"
                className="cursor-pointer text-gray-500 text-sm font-bold my-6"
              >
                لینک ها
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
