import React from "react";

const Footer = () => {
  return (
    <>
      <div className="border-t border-gray-400 max-w-1000 ml-12 mr-12 mb-7"></div>
      <footer className="flex flex-col justify-center gap-36 px-4 laptop:flex-row dark:bg-indigo-950  border-t-1 py-10">
        <div className="hidden laptop:flex justify-center items-center space-x-1">
          <h1 className="text-xl font-bold text-cyan-500">
            آکادمی کد نویسی بحر
          </h1>
          <img src="\imgLand\Untitled-1 6.svg" alt="" className="size-10" />
        </div>
        <ul className="flex flex-wrap justify-between gap-5 mt-3 text-black dark:text-white w-auto mx-5">
          <li>خانه</li>
          <li>دوره</li>
          <li>بلاگ ها</li>
          <li>اساتید</li>
          <li>درباره ما</li>
          <li>ارتباط باما</li>
          <li>خدمات ما</li>
        </ul>

        <div className="flex md:justify-center justify-between  gap-4 mt-4">
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
            className="laptop:hidden size-12"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
