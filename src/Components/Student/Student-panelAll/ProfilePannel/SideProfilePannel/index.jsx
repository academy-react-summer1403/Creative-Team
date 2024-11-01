import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="mt-4 w-1/4">
        <ul className="flex flex-col">
          <NavLink
            to="/pannel/profile/accaunt"
            className={({ isActive }) =>
              `${isActive && "text-blue-400 font-extrabold"}`
            }
          >
            <a className=" text-gray-500 text-sm font-bold mb-6">
              {" "}
              اطلاعات حساب کاربری
            </a>
          </NavLink>
          <NavLink
            to="/pannel/profile/ImagesProfile"
            className="cursor-pointer text-gray-500 text-sm font-bold my-6"
          >
            <a> عکس ها </a>
          </NavLink>
          <NavLink
            to="/pannel/profile/Location"
            className="cursor-pointer text-gray-500 text-sm font-bold my-6"
          >
            <a> محل سکونت</a>
          </NavLink>
          <NavLink
            to="/pannel/profile/Links"
            className="cursor-pointer text-gray-500 text-sm font-bold my-6"
          >
            <a> لینک ها</a>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default index;
