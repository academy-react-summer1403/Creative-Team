import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mobile:flex mobile:flex-row-reverse flex-col justify-center gap-36 px-4  py-10 dark:bg-gray-950">
        <div className="hidden mobile:flex justify-center items-center space-x-1">
          <h1 className="text-xl font-bold text-cyan-500">
            آکادمی کد نویسی بحر
          </h1>
          <img src="\imgLand\Untitled-1 6.svg" alt="" className="size-10" />
        </div>
        <ul className="flex flex-row-reverse flex-wrap justify-between gap-5 mt-3 text-black dark:text-white w-auto mx-5 my-4">
          <li>
            <NavLink to="/">خانه</NavLink>
          </li>
          <li>
            <NavLink to="/courses">دوره</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/blogs">بلاگ ها</NavLink>
          </li>
          <li>
            <NavLink>اساتید</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/about">درباره ما</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">ارتباط با ما</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="">خدمات ما</NavLink>
          </li>
        </ul>

        <div className="flex mobile:justify-center justify-between  gap-4 mt-4">
          <div className="flex gap-5 text-3xl dark:text-white">
            <img
              className="w-6 h-6 cursor-pointer"
              src="/imgLand/instagram.png"
            ></img>
            <img
              className="w-6 h-6 cursor-pointer"
              src="/imgLand/telegram.png"
            ></img>
            <img
              className="w-6 h-6 cursor-pointer"
              src="/imgLand/youtube.png"
            ></img>
            <img
              className="w-6 h-6 cursor-pointer"
              src="/imgLand/twitter.png"
            ></img>
          </div>
          <img
            src="\imgLand\Untitled-1 6.svg"
            alt=""
            className="mobile:hidden size-10 -mt-2"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
