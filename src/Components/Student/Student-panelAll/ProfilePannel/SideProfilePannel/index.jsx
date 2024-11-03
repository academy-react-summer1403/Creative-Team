import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="mt-4 w-1/4">
        <ul className="flex flex-col">
          <NavLink
            to="/pannel/profile"
            className={({ isActive }) => `${isActive && "text-blue-400"}`}
          >
            <a className=" text-sm font-bold mb-6"> اطلاعات حساب کاربری</a>
          </NavLink>
          <NavLink
            to="/pannel/profile/ImagesProfile"
            className={({ isActive }) => `${isActive && "text-blue-400 "}`}
          >
            <a className=" text-gray-500 text-sm font-bold "> عکس ها </a>
          </NavLink>
          <NavLink
            to="/pannel/profile/Location"
            className={({ isActive }) => `${isActive && "text-blue-400 "}`}
          >
            <a className=" cursor-pointer text-gray-500 text-sm font-bold my-6">
              {" "}
              محل سکونت
            </a>
          </NavLink>
          <NavLink
            to="/pannel/profile/Links"
            className={({ isActive }) => `${isActive && "text-blue-400 "}`}
          >
            <a className="cursor-pointer text-gray-500 text-sm font-bold my-6">
              {" "}
              لینک ها
            </a>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default index;
