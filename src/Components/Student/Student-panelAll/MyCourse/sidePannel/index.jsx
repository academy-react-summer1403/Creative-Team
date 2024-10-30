import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className=" w-1/5 flex flex-col justify-items-start gap-6 my-3">
        <div className="mt-4">
          <img src="\pannel\Group 112.png"></img>
        </div>
        <div className=" text-white mr-10">
          <ul className="text-lg mt-8">
            <NavLink
              to="/pannel/mydashboard"
              className="cursor-pointer font-medium mt-3"
            >
              <a className=" flex flex-row justify-end">
                <span>داشبورد</span>
                <img className="ml-2" src="\pannel\activity-01.png"></img>
              </a>
            </NavLink>
            <NavLink
              to="/pannel/mycourse"
              className="cursor-pointer font-medium mt-3"
            >
              <a className=" flex flex-row justify-end">
                <span>دوره من</span>
                <img className="ml-2" src="\pannel\course.png"></img>
              </a>
            </NavLink>
            <NavLink
              to="/pannel/reservecourse"
              className="cursor-pointer font-medium mt-3"
            >
              <a className=" flex flex-row justify-end">
                <span>رزرو من</span>

                <img className="ml-2" src="\pannel\book-02.png"></img>
              </a>
            </NavLink>
            <NavLink
              to="/pannel/coursefav"
              className="cursor-pointer font-medium mt-3"
            >
              <a className=" flex flex-row justify-end">
                <span>دوره مورد علاقه </span>

                <img className="ml-2" src="\pannel\books-02.png"></img>
              </a>
            </NavLink>
            <NavLink
              to="/pannel/blogfav"
              className="cursor-pointer font-medium mt-3"
            >
              <a className=" flex flex-row justify-end">
                <span>بلاگ های مورد علاقه </span>

                <img className="ml-2" src="\pannel\library.png"></img>
              </a>
            </NavLink>
            <NavLink to="" className="cursor-pointer font-medium mt-3">
              <a className=" flex flex-row justify-end">
                <span> پروفایل </span>

                <img className="ml-2" src="\pannel\user-square.png"></img>
              </a>
            </NavLink>
            <NavLink to="" className="cursor-pointer font-medium mt-3">
              <a className=" flex flex-row justify-end">
                <span> پرداخت </span>

                <img
                  className="ml-2"
                  src="\pannel\money-send-02-stroke-rounded 1.png"
                ></img>
              </a>
            </NavLink>
          </ul>
        </div>
        <NavLink
          to="/"
          className="border border-red-400 w-[258px] h-[57px] rounded-full p-3 mt-80 cursor-pointer"
        >
          <label className=" flex flex-row justify-end cursor-pointer">
            <p className="text-red-400">خروج از حساب کاربری</p>

            <img
              className="ml-2"
              src="\pannel\logout-03-stroke-rounded 1.png"
            ></img>
          </label>
        </NavLink>
      </div>
    </>
  );
};

export default index;
