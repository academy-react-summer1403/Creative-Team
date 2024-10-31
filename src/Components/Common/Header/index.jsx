import React from "react";
import DarkMode from "../DarkMode";
import { Link, NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <section className=" mobile:w-[1330px] w-[395px] dark:bg-gray-950">
        <section className=" w-full flex flex-row justify-around gap-20  items-center">
          <div className="hidden mobile:flex flex-row gap-1 w-24 h-10 mt-1 ">
            <DarkMode />
            <div className="w-10 h-10 bg-white border-gray-700 rounded-3xl cursor-pointer">
              <img
                className="my-2 mx-2"
                src="/imgLand/notification-02.png"
              ></img>
            </div>
          </div>
          <div className="hidden mobile:flex flex-row justify-between gap-8 text-white relative left-10 top-0 py-1 px-1 my-2 h-14 w-1/2 items-center bg-black dark:bg-gray-950 dark:border dark:border-gray-300 rounded-full">
            <bottom className=" text-center text-white bg-blue-300 dark:bg-gray-700 rounded-3xl cursor-pointer text-lg px-4 py-2 ">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `${isActive && "text-blue-700  font-extrabold"}`
                }
              >
                ثبت نام یا ورود
              </NavLink>
            </bottom>

            <ul className=" flex flex-row justify-start gap-16 font-serif not-italic font-medium text-lg mr-8 p-3 leading-5 cursor-pointer">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive && "text-blue-600 font-extrabold"}`
                  }
                >
                  درباره ما
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `${isActive && "text-blue-600 font-extrabold"}`
                  }
                >
                  بلاگ ها
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `${isActive && "text-blue-600 font-extrabold"}`
                  }
                >
                  دوره ها
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive && "text-blue-600 font-extrabold"}`
                  }
                >
                  خانه
                </NavLink>
              </li>
            </ul>
          </div>

          <div className=" hidden mobile:flex flex-row items-center space-x-2 mt-1">
            <img className="inline mt-2" src="\imgLand\Untitled-1 3.svg"></img>
            <img className="" src="\imgLand\Untitled-1 4.svg"></img>
          </div>
        </section>
      </section>
      {/******* Resp Mobile *** */}
      <div className="dark:bg-gray-950 w-[390px] p-3 flex flex-row justify-between mobile:hidden">
        <div className="  flex flex-row ">
          <div className="cursor-pointer">
            <img
              className="size-10 my-1 mx-1"
              src="\imgLand\Group 20(1).png"
            ></img>
          </div>
          <div className="my-1 w-28 border border-gray-300 rounded-full flex flex-row justify-center gap-3">
            <div>
              <img
                className=" rounded-full w-4/5 my-1"
                src="\imgLand\Peppe – 07.png"
              ></img>
            </div>
            <div>
              <img
                className="size-4 mx-3 my-3"
                src="\imgLand\arrow-down-01.png"
              ></img>
            </div>
          </div>
        </div>
        <img className="" src="\imgLand\Untitled-1 4.svg"></img>
      </div>
    </>
  );
};

export default index;
