import React from "react";
import DarkMode from "../DarkMode";
import { Link, NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className={'dark:bg-gray-950 ${darkMode && "dark"}'}>
        <section className="  mobile:w-[1300px] w-[395px] mx-auto ">
          <header className=" w-full flex flex-row justify-center gap-44  ">
            <div className="hidden mobile:flex flex-row gap-1 w-24 h-10 mt-1 ">
              <DarkMode />
              <div className="w-10 h-10 bg-white border-gray-700 rounded-3xl cursor-pointer">
                <img
                  className="my-2 mx-2"
                  src="/imgLand/notification-02.png"
                ></img>
              </div>
            </div>
            <div className="hidden mobile:flex flex-row justify-between gap-8 relative left-10 top-0 py-1 pl-1 pr-1 h-14 w-1/2 items-center bg-black dark:bg-gray-700 rounded-full">
              <bottom className=" text-center bg-blue-500 rounded-3xl cursor-pointer laptop:text-lg laptop:px-3 py-2 px-0 mobile:text-sm text-xs dark:bg-blue-700">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `${isActive && "text-blue-400 font-extrabold"}`
                  }
                >
                  ثبت نام یا ورود
                </NavLink>
              </bottom>

              <ul className=" flex flex-row justify-start gap-16 font-serif not-italic font-medium text-lg mr-8 p-3 leading-5 text-white cursor-pointer">
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `${isActive && "text-blue-400 font-extrabold"}`
                    }
                  >
                    درباره ما
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      `${isActive && "text-blue-400 font-extrabold"}`
                    }
                  >
                    بلاگ ها
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      `${isActive && "text-blue-400 font-extrabold"}`
                    }
                  >
                    دوره ها
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive && "text-blue-400 font-extrabold"}`
                    }
                  >
                    خانه
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className=" hidden mobile:flex flex-row items-center space-x-2 mt-1">
              <img
                className="inline mt-2"
                src="\imgLand\Untitled-1 3.svg"
              ></img>
              <img className="" src="\imgLand\Untitled-1 4.svg"></img>
            </div>
          </header>
        </section>
        {/******* Resp Mobile *** */}
        <div className=" p-3 m-3 flex flex-row justify-between gap-5 my-3 mobile:hidden">
          <div className=" flex flex-row justify-between gap-3">
            <div className="cursor-pointer">
              <img src="\imgLand\Group 20(1).png"></img>
            </div>
            <div className=" w-28 border border-gray-300 rounded-full flex flex-row justify-center gap-3">
              <div>
                <img
                  className="rounded-full w-4/5 mt-2"
                  src="\imgLand\Peppe – 07.png"
                ></img>
              </div>
              <div>
                <img className="mt-4" src="\imgLand\arrow-down-01.png"></img>
              </div>
            </div>
          </div>
          <img className="" src="\imgLand\Untitled-1 4.svg"></img>
        </div>
      </div>
    </>
  );
};

export default index;
